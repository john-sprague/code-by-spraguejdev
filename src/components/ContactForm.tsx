import { useRef, useState, ChangeEvent, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import Button from "./Button";
import { Loader2 } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface ContactFormProps {
  onSuccess: (message: string) => void;
  onError: (message: string) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSuccess, onError }) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef<HTMLFormElement | null>(null);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isValidEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    if (!formData.name || !formData.email || !formData.message) {
      onError("Please fill out all fields.");
      return;
    }

    if (!isValidEmail(formData.email)) {
      onError("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    emailjs
      .sendForm("service_lrbv74w", "template_gcsheil", form.current, {
        publicKey: "IJ8RHtCYPgCwtKFP1",
      })
      .then(() => {
        setFormData({ name: "", email: "", message: "" });
        onSuccess("Your message has been sent successfully!");
      })
      .catch((error) => {
        console.error("FAILED...", error.text);
        onError("Something went wrong. Please try again later.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <form
      ref={form}
      onSubmit={handleSubmit}
      className="space-y-6 pt-12 w-full animate-fade-in"
    >
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-zinc-300"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full mt-1 px-4 py-2 border border-zinc-700 bg-zinc-800 rounded-lg text-white focus:ring-2 focus:ring-purple-600"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-zinc-300"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full mt-1 px-4 py-2 border border-zinc-700 bg-zinc-800 rounded-lg text-white focus:ring-2 focus:ring-purple-600"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-zinc-300"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="w-full mt-1 px-4 py-2 border border-zinc-700 bg-zinc-800 rounded-lg text-white focus:ring-2 focus:ring-purple-600"
        />
      </div>

      <Button variant="gradient" size="lg" disabled={isSubmitting}>
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            <Loader2 className="animate-spin h-5 w-5" /> Sending...
          </span>
        ) : (
          "Reach Out"
        )}
      </Button>
    </form>
  );
};

export default ContactForm;
