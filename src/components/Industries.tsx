const industries = [
  { icon: "🛒", name: "Retail & E-Commerce" },
  { icon: "🏠", name: "Real Estate" },
  { icon: "💡", name: "Tech & SaaS" },
  { icon: "🏭", name: "Manufacturing" },
  { icon: "🤝", name: "Agencies & Freelancers" },
  { icon: "🚀", name: "Startups" },
  { icon: "📚", name: "Education & Coaching" },
  { icon: "⚕️", name: "Healthcare" },
];

const Industries = () => (
  <section id="industries" className="py-20 px-[5%] bg-primary">
    <div className="max-w-[1100px] mx-auto">
      <span className="inline-block text-[0.72rem] font-bold tracking-[2.5px] uppercase text-gold-light mb-3">
        Who We Serve
      </span>
      <h2 className="font-heading text-[clamp(1.8rem,3.5vw,2.6rem)] text-primary-foreground leading-[1.2] mb-3.5">
        Industries We Work With
      </h2>
      <p className="text-base text-primary-foreground/60 max-w-[520px] leading-[1.7] mb-12">
        We bring specialized expertise across a wide range of sectors.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5">
        {industries.map((ind) => (
          <div
            key={ind.name}
            className="bg-primary-foreground/[0.06] border border-primary-foreground/10 rounded-[10px] p-5 text-center text-primary-foreground/85 text-sm font-medium hover:bg-gold/15 hover:border-gold/40 hover:text-primary-foreground transition-all cursor-default"
          >
            <span className="text-2xl block mb-2">{ind.icon}</span>
            {ind.name}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Industries;
