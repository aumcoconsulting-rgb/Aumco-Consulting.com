const guarantees = [
  { icon: "✅", title: "Free Strategy Call", sub: "30-min consultation included" },
  { icon: "🔁", title: "Revision Guaranteed", sub: "Satisfaction or we revise, no questions" },
  { icon: "⚡", title: "Fast Turnaround", sub: "On every package, always on time" },
];

const packages = [
  {
    type: "Starter",
    name: "Launch Ready",
    tagline: "For businesses just getting started with branding",
    oldPrice: "₹20,000",
    price: "₹16,999",
    note: "One-time · No hidden fees",
    features: [
      "Professional Logo Design",
      "Social Media Setup (3 platforms)",
      "Business Card Design",
      "7-day Content Plan",
      "Basic AI Tools Integration",
      "1-hour Strategy Session",
    ],
    featured: false,
  },
  {
    type: "Growth",
    name: "Brand & Build",
    tagline: "Full brand launch for serious founders",
    oldPrice: "₹45,000",
    price: "₹38,999",
    note: "One-time · No hidden fees",
    features: [
      "Complete Brand Identity",
      "WordPress Website (5 pages)",
      "Social Media Setup (5 platforms)",
      "Professional Pitch Deck",
      "Google My Business Setup",
      "15-day Content Calendar",
      "2 Revision Rounds",
      "Free 30-min Strategy Call",
    ],
    featured: true,
  },
  {
    type: "Premium",
    name: "Scale Up",
    tagline: "End-to-end setup for high-growth businesses",
    oldPrice: "₹1,50,000",
    price: "₹69,999",
    note: "One-time · No hidden fees",
    features: [
      "Everything in Brand & Build",
      "Custom Website & SEO",
      "MSME & GST Registration Support",
      "SOP Development",
      "30-day Marketing Strategy",
      "Advanced AI & n8n Automation",
      "CRM Setup & Optimization",
      "3-month Email Support",
    ],
    featured: false,
  },
];

const Pricing = () => (
  <section id="offers" className="py-20 px-[5%] bg-background">
    <div className="max-w-[1160px] mx-auto">
      <span className="inline-block text-[0.72rem] font-bold tracking-[2.5px] uppercase text-gold mb-3">
        Pricing
      </span>
      <h2 className="font-heading text-[clamp(1.8rem,3.5vw,2.6rem)] text-primary leading-[1.2] mb-3.5">
        Plans Built for Every Stage
      </h2>
      <p className="text-base text-muted-foreground max-w-[520px] leading-[1.7] mb-10">
        Affordable than agencies — 30–40% less cost, with zero compromise on quality.
      </p>

      {/* Guarantee Bar */}
      <div className="flex items-center justify-center flex-wrap bg-primary rounded-[14px] p-5 md:p-6 mb-10 gap-0">
        {guarantees.map((g, i) => (
          <div key={g.title} className="contents">
            <div className="flex items-center gap-3 px-7 py-2 flex-1 min-w-[200px] justify-center">
              <span className="text-[1.4rem] shrink-0">{g.icon}</span>
              <div>
                <div className="text-sm font-bold text-primary-foreground">{g.title}</div>
                <div className="text-xs text-primary-foreground/50">{g.sub}</div>
              </div>
            </div>
            {i < guarantees.length - 1 && (
              <div className="hidden md:block w-px h-10 bg-primary-foreground/10 shrink-0" />
            )}
          </div>
        ))}
      </div>

      {/* Packages */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[18px] items-start">
        {packages.map((pkg) => (
          <div
            key={pkg.name}
            className={`rounded-2xl p-7 relative border-[1.5px] hover:shadow-[0_8px_40px_rgba(13,27,46,0.10)] hover:-translate-y-[3px] transition-all ${
              pkg.featured
                ? "bg-primary border-primary"
                : "bg-card border-input"
            }`}
          >
            {pkg.featured && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-primary text-[0.68rem] font-bold tracking-[1.5px] uppercase px-3.5 py-1 rounded-full whitespace-nowrap">
                Most Popular
              </div>
            )}
            <div className={`text-[0.68rem] font-bold tracking-[2px] uppercase mb-2 ${pkg.featured ? "text-gold-light" : "text-gold"}`}>
              {pkg.type}
            </div>
            <h3 className={`font-heading text-xl mb-1 ${pkg.featured ? "text-primary-foreground" : "text-primary"}`}>
              {pkg.name}
            </h3>
            <p className={`text-[0.8rem] leading-snug mb-4 ${pkg.featured ? "text-primary-foreground/50" : "text-muted-foreground"}`}>
              {pkg.tagline}
            </p>
            <div className={`text-[0.82rem] line-through mb-0.5 ${pkg.featured ? "text-primary-foreground/35" : "text-muted-foreground"}`}>
              Was {pkg.oldPrice}
            </div>
            <div className={`text-[1.7rem] font-bold leading-none mb-0.5 ${pkg.featured ? "text-gold-light" : "text-gold"}`}>
              {pkg.price}
            </div>
            <div className={`text-xs mb-4 ${pkg.featured ? "text-primary-foreground/45" : "text-muted-foreground"}`}>
              {pkg.note}
            </div>
            <div className={`h-px mb-4 ${pkg.featured ? "bg-primary-foreground/10" : "bg-input"}`} />
            <ul className="list-none mb-6">
              {pkg.features.map((f) => (
                <li
                  key={f}
                  className={`flex items-start gap-2 text-[0.83rem] py-1.5 border-b leading-snug ${
                    pkg.featured
                      ? "text-primary-foreground/80 border-primary-foreground/[0.08]"
                      : "text-foreground border-input/50"
                  }`}
                >
                  <span className={`font-bold shrink-0 mt-px text-xs ${pkg.featured ? "text-gold-light" : "text-gold"}`}>✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className={`block w-full text-center no-underline font-body font-semibold text-sm px-5 py-3 rounded-lg transition-all ${
                pkg.featured
                  ? "bg-gold text-primary hover:bg-gold-light"
                  : "bg-primary text-primary-foreground hover:bg-navy-mid"
              }`}
            >
              Get Started
            </a>
            <p className={`text-xs text-center mt-3 ${pkg.featured ? "text-primary-foreground/40" : "text-muted-foreground"}`}>
              🛡️ Satisfaction guaranteed
            </p>
          </div>
        ))}

        {/* Custom Plan */}
        <div className="rounded-2xl p-7 border-2 border-dashed border-muted-foreground/30 bg-background text-center flex flex-col justify-center items-center min-h-[420px] lg:min-h-0">
          <span className="text-[2.5rem] mb-3.5">🤝</span>
          <h3 className="font-heading text-xl text-primary mb-3">Custom Plan</h3>
          <p className="text-sm text-muted-foreground leading-[1.7] mb-6 max-w-[200px]">
            Need legal compliance, business strategy, or something specific? Let's build a plan around your exact needs.
          </p>
          <p className="text-lg font-bold text-primary mb-1.5">Starting ₹10,000</p>
          <p className="text-xs text-muted-foreground mb-6">Scoped to your requirements</p>
          <a
            href="#contact"
            className="block w-full text-center no-underline font-body font-semibold text-sm px-5 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-navy-mid transition-all"
          >
            Let's Talk →
          </a>
          <p className="text-xs text-muted-foreground mt-3.5">Free discovery call · No commitment</p>
        </div>
      </div>
    </div>
  </section>
);

export default Pricing;
