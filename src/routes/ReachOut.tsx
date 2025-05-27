import { useState, ChangeEvent, FormEvent, useRef } from "react";
import TitleSection from "../components/TitleSection";
import Button from "../components/Button";
import ContactCards from "../components/ContactCards";
import emailjs from "@emailjs/browser";

interface FormData {
  name: string;
  email: string;
  message: string;
}

type ToastType = "success" | "error" | null;

const ReachOut: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastType, setToastType] = useState<ToastType>(null);

  const form = useRef<HTMLFormElement | null>(null);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm("service_lrbv74w", "template_gcsheil", form.current, {
        publicKey: "IJ8RHtCYPgCwtKFP1",
      })
      .then(
        () => {
          setFormData({
            name: "",
            email: "",
            message: "",
          });
          setToastMessage("Your message has been sent successfully!");
          setToastType("success");
          console.log("SUCCESS!");

          setTimeout(() => {
            setToastMessage(null);
            setToastType(null);
          }, 5000);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setToastMessage("Something went wrong. Please try again later.");
          setToastType("error");

          setTimeout(() => {
            setToastMessage(null);
            setToastType(null);
          }, 5000);
        }
      );
  };

  return (
    <>
      {toastMessage && (
        <div
          className={`fixed top-5 right-5 z-50 px-6 py-4 rounded-lg shadow-lg transition-all duration-300 ${
            toastType === "success"
              ? "bg-green-500 text-white"
              : "bg-red-500 text-white"
          }`}
        >
          {toastMessage}
        </div>
      )}
      <div className="relative pb-16">
        <div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16">
          <TitleSection
            title="Get In Touch"
            subtitle="I'm always open to discussing new opportunities, collaborations, or just having a chat about technology."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <form
              ref={form}
              onSubmit={handleSubmit}
              className="space-y-6 pt-12 lg:col-span-2 w-full animate-fade-in"
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

              <Button variant="gradient" size="lg">
                Reach Out
              </Button>
            </form>
            <ContactCards />
          </div>

          <div className="w-full h-px bg-zinc-300/50 my-6 animate-fade-in" />
        </div>
      </div>
    </>
  );
};

export default ReachOut;
