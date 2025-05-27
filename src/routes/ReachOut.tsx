import { useState } from "react";
import TitleSection from "../components/TitleSection";
import ContactCards from "../components/ContactCards";
import ContactForm from "../components/ContactForm";

const ReachOut: React.FC = () => {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastType, setToastType] = useState<"success" | "error" | null>(null);

  const handleSuccess = (message: string) => {
    setToastMessage(message);
    setToastType("success");
    setTimeout(() => {
      setToastMessage(null);
      setToastType(null);
    }, 5000);
  };

  const handleError = (message: string) => {
    setToastMessage(message);
    setToastType("error");
    setTimeout(() => {
      setToastMessage(null);
      setToastType(null);
    }, 5000);
  };

  return (
    <div className="relative pb-16">
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

      <div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16">
        <TitleSection
          title="Get In Touch"
          subtitle="I'm always open to discussing new opportunities, collaborations, or just having a chat about technology."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ContactForm onSuccess={handleSuccess} onError={handleError} />
          </div>
          <ContactCards />
        </div>

        <div className="w-full h-px bg-zinc-300/50 my-6 animate-fade-in" />
      </div>
    </div>
  );
};

export default ReachOut;
