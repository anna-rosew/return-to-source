'use client';

import { useState } from 'react';
import { Button } from '../button';

const ContactForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Hi Rose,\n\n${form.message}\n\nBest,\n${form.name}\n${form.email}`;
    const mailto = `mailto:rose_long@icloud.com?subject=${encodeURIComponent(
      form.subject || 'Enquiry from website'
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  return (
    <div className="w-full text-left">
      <h2 className="mb-2">Get in Touch</h2>
      <p className="mb-6 text-sm text-black/65">
        If you&apos;d like to book a <strong>class, workshop, or retreat,</strong> or have any
        questions, please don&apos;t hesitate to reach out.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium uppercase tracking-wide text-black/60">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="rounded-lg border border-customBeige/80 bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-customTeal"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium uppercase tracking-wide text-black/60">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className="rounded-lg border border-customBeige/80 bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-customTeal"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium uppercase tracking-wide text-black/60">
            I&apos;m interested in
          </label>
          <select
            name="subject"
            value={form.subject}
            onChange={handleChange}
            className="rounded-lg border border-customBeige/80 bg-white px-4 py-2.5 text-sm text-black/70 focus:outline-none focus:ring-1 focus:ring-customTeal"
          >
            <option value="">Select an option…</option>
            <option value="Spring Awakening: Easter Series">Spring Awakening: Easter Series</option>
            <option value="Online Classes">Online Classes</option>
            <option value="In-Person Classes">In-Person Classes</option>
            <option value="Retreat">Retreat</option>
            <option value="1:1 Sessions">1:1 Sessions</option>
            <option value="General Enquiry">General Enquiry</option>
          </select>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium uppercase tracking-wide text-black/60">
            Message
          </label>
          <textarea
            name="message"
            required
            value={form.message}
            onChange={handleChange}
            rows={5}
            placeholder="Write your message here…"
            className="resize-none rounded-lg border border-customBeige/80 bg-white px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-customTeal"
          />
        </div>

        <Button type="submit" variant="secondary" size="lg" className="w-full">
          Send Message
        </Button>

        <p className="text-center text-xs text-black/40">
          This will open your email client to send the message.
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
