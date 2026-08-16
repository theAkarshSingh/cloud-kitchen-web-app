import { useState } from "react";
import toast from "react-hot-toast";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission delay
    await new Promise((res) => setTimeout(res, 800));
    toast.success("Message sent! We'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
    setLoading(false);
  };

  return (
    <section id="contact" className="py-24 bg-white/5">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-orange-400 text-sm font-semibold tracking-widest uppercase">
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">Get in Touch</h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Questions, feedback, or want to partner with us? We'd love to hear
            from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="text-3xl">📧</div>
              <div>
                <h4 className="font-semibold mb-1">Email Us</h4>
                <p className="text-gray-400 text-sm">hello@mealsnest.in</p>
                <p className="text-gray-500 text-xs mt-1">
                  We reply within 24 hours on business days.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-3xl">📞</div>
              <div>
                <h4 className="font-semibold mb-1">Call Us</h4>
                <p className="text-gray-400 text-sm">+91 98765 43210</p>
                <p className="text-gray-500 text-xs mt-1">
                  Mon – Sat, 9 AM to 9 PM IST
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-3xl">🏪</div>
              <div>
                <h4 className="font-semibold mb-1">Kitchen Partners</h4>
                <p className="text-gray-400 text-sm">
                  Interested in listing your kitchen on our platform? Reach out
                  and our team will onboard you within 24 hours.
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-4"
          >
            <div>
              <label className="block text-sm text-gray-400 mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="w-full bg-black/40 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-orange-400"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
                className="w-full bg-black/40 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-orange-400"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={4}
                placeholder="How can we help you?"
                className="w-full bg-black/40 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-orange-400 resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-50 text-white py-3 rounded-xl font-semibold text-sm transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
