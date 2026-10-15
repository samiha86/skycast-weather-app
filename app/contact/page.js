
"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      return;
    }

    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white md:px-12">
      <header className="mx-auto flex max-w-6xl items-center justify-between">
        <a href="/" className="text-2xl font-bold text-sky-400">
          SkyCast
        </a>

        <nav className="flex flex-wrap gap-4 text-sm text-slate-300">
          <a href="/" className="hover:text-sky-400">Home</a>
          <a href="/about" className="hover:text-sky-400">About</a>
          <a href="/services" className="hover:text-sky-400">Services</a>
        </nav>
      </header>

      <section className="mx-auto max-w-2xl py-16">
        <div className="mb-10 text-center">
          <p className="font-semibold tracking-widest text-sky-300">
            GET IN TOUCH
          </p>

          <h1 className="mt-4 text-4xl font-bold md:text-5xl">
            Contact Us
          </h1>

          <p className="mt-5 leading-7 text-slate-300">
            Have a question or suggestion? Fill out the form below.
            We would love to hear from you.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8"
        >
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium">
              Your Name
            </label>

            <input
              id="name"
              type="text"
              required
              value={form.name}
              onChange={(event) =>
                setForm({ ...form, name: event.target.value })
              }
              placeholder="Enter your name"
              className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-sky-400"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium">
              Email Address
            </label>

            <input
              id="email"
              type="email"
              required
              value={form.email}
              onChange={(event) =>
                setForm({ ...form, email: event.target.value })
              }
              placeholder="Enter your email"
              className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-sky-400"
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium">
              Your Message
            </label>

            <textarea
              id="message"
              required
              rows={5}
              value={form.message}
              onChange={(event) =>
                setForm({ ...form, message: event.target.value })
              }
              placeholder="Write your message here..."
              className="w-full resize-y rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-sky-400"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-sky-500 px-6 py-3 font-semibold transition hover:bg-sky-400"
          >
            Send Message
          </button>

          {submitted && (
            <p role="status" className="text-center text-emerald-300">
              Thank you! Your form was submitted successfully.
            </p>
          )}
        </form>

        <p className="mt-5 text-center text-sm text-slate-500">
          Demo contact form — messages are not sent to a server.
        </p>
      </section>

      <footer className="border-t border-white/10 py-6 text-center text-sm text-slate-400">
        © 2026 SkyCast. Weather for every day.
      </footer>
    </main>
  );
}
