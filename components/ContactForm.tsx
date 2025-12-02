"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<string | null>(null);

  const validate = () => {
    let valid = true;
    let newErrors = { name: "", email: "", message: "" };

    // Name validation
    if (!name.trim()) {
      newErrors.name = "Name is required.";
      valid = false;
    } else if (name.length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
      valid = false;
    }

    // Email validation
    if (!email.trim()) {
      newErrors.email = "Email is required.";
      valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = "Enter a valid email address.";
      valid = false;
    }

    // Message validation
    if (!message.trim()) {
      newErrors.message = "Message is required.";
      valid = false;
    } else if (message.length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      setStatus(null);
      return;
    }

    setStatus("Message sent successfully! (frontend only for now)");
    setErrors({ name: "", email: "", message: "" });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 max-w-xl mx-auto px-2 sm:px-0"
    >
      <div>
        <label className="block mb-1 text-sm md:text-base font-medium text-[var(--text)]">
          Name
        </label>

        <input
          type="text"
          className={`
            w-full p-3 rounded-lg text-sm md:text-base
            bg-[var(--card-bg)]
            border 
            ${errors.name ? "border-red-500" : "border-[var(--card-border)]"}
            text-[var(--text)]
            placeholder:text-[var(--text)]/40
            backdrop-blur-md
          `}
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name}</p>
        )}
      </div>

      <div>
        <label className="block mb-1 text-sm md:text-base font-medium text-[var(--text)]">
          Email
        </label>

        <input
          type="email"
          className={`
            w-full p-3 rounded-lg text-sm md:text-base
            bg-[var(--card-bg)]
            border 
            ${errors.email ? "border-red-500" : "border-[var(--card-border)]"}
            text-[var(--text)]
            placeholder:text-[var(--text)]/40
            backdrop-blur-md
          `}
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
        )}
      </div>

      <div>
        <label className="block mb-1 text-sm md:text-base font-medium text-[var(--text)]">
          Message
        </label>

        <textarea
          className={`
            w-full p-3 h-28 resize-none rounded-lg text-sm md:text-base
            bg-[var(--card-bg)]
            border 
            ${errors.message ? "border-red-500" : "border-[var(--card-border)]"}
            text-[var(--text)]
            placeholder:text-[var(--text)]/40
            backdrop-blur-md
          `}
          placeholder="Write your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="
          w-full sm:w-auto px-6 py-3
          bg-yellow-400 text-black
          rounded-lg font-semibold text-sm md:text-base
          hover:bg-yellow-500 transition
        "
      >
        Send Message
      </button>

      {status && (
        <p className="text-green-600 text-sm md:text-base mt-2">{status}</p>
      )}
    </form>
  );
}
