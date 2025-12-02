"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setStatus("Please fill all fields.");
      return;
    }

    setStatus("Message sent! (frontend only for now)");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 max-w-xl mx-auto w-full px-2 sm:px-0"
    >
      {/* NAME */}
      <div>
        <label className="block mb-1 text-sm md:text-base font-medium text-[var(--text)]">
          Name
        </label>
        <input
          type="text"
          className="
            w-full p-3 rounded-lg text-sm md:text-base 
            bg-[var(--card-bg)]
            border border-[var(--card-border)]
            text-[var(--text)]
            placeholder:text-[var(--text)]/40
            backdrop-blur-md
          "
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      {/* EMAIL */}
      <div>
        <label className="block mb-1 text-sm md:text-base font-medium text-[var(--text)]">
          Email
        </label>
        <input
          type="email"
          className="
            w-full p-3 rounded-lg text-sm md:text-base 
            bg-[var(--card-bg)]
            border border-[var(--card-border)]
            text-[var(--text)]
            placeholder:text-[var(--text)]/40
            backdrop-blur-md
          "
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      {/* MESSAGE */}
      <div>
        <label className="block mb-1 text-sm md:text-base font-medium text-[var(--text)]">
          Message
        </label>
        <textarea
          className="
            w-full p-3 h-28 resize-none rounded-lg text-sm md:text-base
            bg-[var(--card-bg)]
            border border-[var(--card-border)]
            text-[var(--text)]
            placeholder:text-[var(--text)]/40
            backdrop-blur-md
          "
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      {/* BUTTON */}
      <button
        type="submit"
        className="
          w-full sm:w-auto px-6 py-3 
          bg-yellow-400 
          text-black 
          rounded-lg font-semibold text-sm md:text-base
        "
      >
        Send Message
      </button>

      {/* STATUS */}
      {status && (
        <p className="text-sm md:text-base text-yellow-600 mt-2">{status}</p>
      )}
    </form>
  );
}
