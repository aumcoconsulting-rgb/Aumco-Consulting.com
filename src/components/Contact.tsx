import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi SSC! I'm ${form.name}.%0A%0AEmail: ${form.email}%0APhone: ${form.phone}%0AService: ${form.service}%0A%0AMessage: ${form.message}`;
    window.open(`https://wa.me/919003748116?text=${text}`, "_blank");
  };

  return (
    <section id="contact" className="py-20 px-[5%] bg-card">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-[60px] items-start">
        {/* Left */}
        <div>
          <span className="inline-block text-[0.72rem] font-bold tracking-[2.5px] uppercase text-gold mb-3">
            Let's Talk
          </span>
          <h2 className="font-heading text-[clamp(1.8rem,3.5vw,2.6rem)] text-primary leading-[1.2] mb-3.5">
            Ready to Grow Your Business?
          </h2>
          <p className="text-base text-muted-foreground max-w-[520px] leading-[1.7]">
            Book a free consultation or drop us a message. We'll get back to you within 24 hours.
          </p>

          <div className="mt-7 flex flex-col gap-4">
            <div className="flex items-center gap-4 bg-background rounded-[10px] p-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-base shrink-0">📞</div>
              <div>
                <strong className="block text-xs text-muted-foreground font-medium">Phone</strong>
                <a href="tel:+919003748116" className="text-[0.95rem] font-semibold text-primary no-underline hover:text-gold transition-colors">
                  +91 90037 48116
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-background rounded-[10px] p-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-base shrink-0">✉️</div>
              <div>
                <strong className="block text-xs text-muted-foreground font-medium">Email</strong>
                <a href="mailto:consult@aumcoconsulting.com" className="text-[0.95rem] font-semibold text-primary no-underline hover:text-gold transition-colors">
                  consult@aumcoconsulting.com
                </a>
              </div>
            </div>
          </div>

          <div className="flex gap-2.5 mt-6 flex-wrap">
            {[
              { href: "https://wa.me/919003748116", label: "💬 WhatsApp" },
              { href: "https://www.linkedin.com/in/keerthivasan-rk-b0b858230", label: "in LinkedIn" },
              { href: "https://www.instagram.com/aumcoconsulting?utm_source=qr&igsh=MWd0ZjI5YXoybW5oZw==", label: "📸 Instagram" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground no-underline text-[0.82rem] font-semibold px-4 py-2.5 rounded-lg hover:bg-gold hover:text-primary transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="bg-background rounded-2xl p-8">
          <h3 className="font-heading text-xl text-primary mb-6">Send Us a Message</h3>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="flex flex-col gap-1.5 mb-3.5">
                <label className="text-xs font-semibold text-foreground">Your Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Raj Kumar"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="font-body text-sm p-3 border-[1.5px] border-input rounded-lg bg-card text-foreground outline-none focus:border-primary transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1.5 mb-3.5">
                <label className="text-xs font-semibold text-foreground">Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="raj@business.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="font-body text-sm p-3 border-[1.5px] border-input rounded-lg bg-card text-foreground outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1.5 mb-3.5">
              <label className="text-xs font-semibold text-foreground">Phone Number</label>
              <input
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="font-body text-sm p-3 border-[1.5px] border-input rounded-lg bg-card text-foreground outline-none focus:border-primary transition-colors"
              />
            </div>
            <div className="flex flex-col gap-1.5 mb-3.5">
              <label className="text-xs font-semibold text-foreground">Interested In</label>
              <select
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className="font-body text-sm p-3 border-[1.5px] border-input rounded-lg bg-card text-foreground outline-none focus:border-primary transition-colors"
              >
                <option value="">— Select a service —</option>
                <optgroup label="Business Consulting">
                  <option>Business Strategy</option>
                  <option>Business Development</option>
                  <option>Startup Support</option>
                  <option>Legal & Compliance</option>
                </optgroup>
                <optgroup label="Marketing & Branding">
                  <option>Digital Marketing</option>
                  <option>Branding</option>
                  <option>Social Media Management</option>
                </optgroup>
                <optgroup label="Packages">
                  <option>Launch Ready (₹16,999)</option>
                  <option>Brand & Build (₹38,999)</option>
                  <option>Scale Up (₹69,999)</option>
                  <option>Custom Plan</option>
                </optgroup>
                <option>Not Sure Yet</option>
              </select>
            </div>
            <div className="flex flex-col gap-1.5 mb-3.5">
              <label className="text-xs font-semibold text-foreground">Your Message *</label>
              <textarea
                required
                placeholder="Tell us about your business and what you need help with..."
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="font-body text-sm p-3 border-[1.5px] border-input rounded-lg bg-card text-foreground outline-none focus:border-primary transition-colors resize-y"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#25D366] text-primary-foreground font-body font-bold text-base py-3.5 rounded-lg border-none cursor-pointer hover:opacity-90 transition-opacity"
            >
              💬 Send via WhatsApp
            </button>
            <p className="text-xs text-muted-foreground text-center mt-2">
              You'll be redirected to WhatsApp with your message pre-filled
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
