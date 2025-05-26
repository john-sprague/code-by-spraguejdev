import { useState, ChangeEvent, FormEvent } from "react";
import TitleSection from "../components/TitleSection";
interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Form submitted");
  };

  return (
    <div className="relative pb-16">
      <div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16">
        <TitleSection
          title="Contact Me"
          subtitle="Have questions? Feel free to reach out, and I’ll get back to you as
            soon as possible. "
          children={undefined}
        />
        <form
          onSubmit={handleSubmit}
          className="space-y-6 max-w-2xl mx-auto mt-12 animate-fade-in"
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

          <button
            type="submit"
            className="w-full py-2 text-sm font-semibold text-white bg-purple-600 border border-purple-200 rounded-full hover:bg-purple-700 focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
          >
            Send Message
          </button>
        </form>

        <div className="w-full h-px bg-zinc-300/50 my-6 animate-fade-in" />
      </div>
    </div>
  );
};

export default Contact;
