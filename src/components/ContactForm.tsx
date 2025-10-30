import React, { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/.netlify/functions/send-contact-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to send message");

      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl space-y-4">
      <input
        className="w-full border border-gray-300 rounded-lg p-3"
        type="text"
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        className="w-full border border-gray-300 rounded-lg p-3"
        type="email"
        name="email"
        placeholder="Your Email"
        value={form.email}
        onChange={handleChange}
        required
      />
      <input
        className="w-full border border-gray-300 rounded-lg p-3"
        type="text"
        name="subject"
        placeholder="Subject"
        value={form.subject}
        onChange={handleChange}
        required
      />
      <textarea
        className="w-full border border-gray-300 rounded-lg p-3 h-32"
        name="message"
        placeholder="Your Message"
        value={form.message}
        onChange={handleChange}
        required
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="bg-brandRose text-white px-6 py-3 rounded-lg hover:bg-brandSlate transition disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>

      {status === "sent" && (
        <p className="text-green-600 mt-2">✅ Message sent successfully!</p>
      )}
      {status === "error" && (
        <p className="text-red-600 mt-2">❌ Failed to send message. Try again.</p>
      )}
    </form>
  );
}
