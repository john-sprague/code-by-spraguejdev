import React from "react";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const ContactCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-1 lg:grid-cols-1">
      <div className="bg-zinc-900/80 border border-zinc-700 rounded-lg p-6 space-y-4 animate-fade-in backdrop-blur-sm">
        <h3 className="text-xl font-semibold text-zinc-100">
          Contact Information
        </h3>
        <ul className="space-y-2 text-zinc-400">
          <li className="flex items-center gap-2">
            <Mail className="h-5 w-5 text-orange-600 hover:text-orange-700 transition-transform hover:scale-110" />
            spraguejdev@gmail.com
          </li>
          <li className="flex items-center gap-2">
            <Phone className="h-5 w-5 text-orange-600 hover:text-orange-700 transition-transform hover:scale-110" />
            +1 (803)661-4774
          </li>
          <li className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-orange-600 hover:text-orange-700 transition-transform hover:scale-110" />
            Bentonville, Arkansas
          </li>
        </ul>
      </div>

      <div className="bg-zinc-900/80 border border-zinc-700 rounded-lg p-6 space-y-4 animate-fade-in backdrop-blur-sm">
        <h3 className="text-xl font-semibold text-zinc-100">Follow Me</h3>
        <div className="flex items-center gap-4 text-zinc-400">
          <a
            href="https://github.com/john-sprague"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="hover:text-zinc-100 transition-transform hover:scale-110"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com/in/spraguejdev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="hover:text-zinc-100 transition-transform hover:scale-110"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>

      <div className="bg-zinc-900/80 border border-zinc-700 rounded-lg p-6 space-y-4 animate-fade-in backdrop-blur-sm">
        <h3 className="text-xl font-semibold text-zinc-100">Availability</h3>
        <p className="text-zinc-400">
          I’m currently available for freelance projects and full-time
          opportunities. Feel free to reach out to discuss your project needs.
        </p>
      </div>
    </div>
  );
};

export default ContactCards;
