import ScrollReveal from "./ScrollReveal";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const stats = [
  { number: "₹90L+", label: "Revenue Generated for Clients" },
  { number: "10+", label: "Successful Business Launches" },
  { number: "70+", label: "Happy Service Deliveries" },
  { number: "100%", label: "Client Satisfaction Rate" },
];

const cases = [
  {
    tag: "Manufacturing · Cookware",
    client: "Bhagya Cast Iron",
    industry: "Field Sales & Marketing Strategy",
    challenge: "A cookware manufacturer needed a structured field sales operation and marketing strategy to grow their B2B distribution and reach new markets.",
    solution: "Led end-to-end field sales execution, built a market outreach strategy, and drove consistent B2B lead generation across the region.",
    resultIcon: "📈",
    result: "Generated ₹36 Lakhs+ in revenue through direct sales & marketing strategy",
  },
  {
    tag: "Food & Beverage · Catering",
    client: "Vellore Wedding Briyani",
    industry: "Branding, Platform Launch & Pricing Strategy",
    challenge: "A local biryani brand wanted to move beyond walk-in customers, attract high-value bulk & wedding orders, and establish a premium presence on food delivery platforms.",
    solution: "Designed eye-catching marketing posters, launched the brand on Zomato & Swiggy with optimised listings, and developed a high-margin pricing strategy.",
    resultIcon: "🍛",
    result: "Successfully listed on Zomato & Swiggy — driving high-paid bulk & wedding orders through strategic pricing",
  },
];

const CountUpStat = ({ number, label, delay }: { number: string; label: string; delay: number }) => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>(0.2);

  return (
    <div
      ref={ref}
      className={`bg-primary rounded-lg p-6 md:p-7 text-center transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="font-heading text-[2.2rem] font-black text-gold-light leading-none mb-2">
        {number}
      </div>
      <div className="text-[0.82rem] text-primary-foreground/65 font-medium leading-snug">
        {label}
      </div>
    </div>
  );
};

const Portfolio = () => (
  <section id="portfolio" className="py-16 md:py-20 px-[5%] bg-card">
    <div className="max-w-[1100px] mx-auto">
      <ScrollReveal>
        <span className="inline-block text-[0.72rem] font-bold tracking-[2.5px] uppercase text-gold mb-3">
          Our Work
        </span>
        <h2 className="font-heading text-[clamp(1.8rem,3.5vw,2.6rem)] text-primary leading-[1.2] mb-3.5">
          Real Results for Real Businesses
        </h2>
        <p className="text-base text-muted-foreground max-w-[520px] leading-[1.7] mb-8 md:mb-12">
          We don't just plan — we execute. Here's a look at what we've delivered for our clients.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
        {stats.map((s, i) => (
          <CountUpStat key={s.label} number={s.number} label={s.label} delay={i * 100} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {cases.map((c, i) => (
          <ScrollReveal key={c.client} delay={i * 150}>
            <div className="bg-background rounded-2xl overflow-hidden border border-input hover:shadow-[0_8px_40px_rgba(13,27,46,0.10)] hover:-translate-y-1 transition-all h-full">
              <div className="bg-primary p-6 md:p-7">
                <span className="inline-block bg-gold/20 text-gold-light text-[0.7rem] font-bold tracking-[1.5px] uppercase px-3 py-1 rounded-full border border-gold/30 mb-3.5">
                  {c.tag}
                </span>
                <div className="font-heading text-[1.4rem] text-primary-foreground mb-1.5">{c.client}</div>
                <div className="text-[0.82rem] text-primary-foreground/50 font-medium">{c.industry}</div>
              </div>
              <div className="p-6 md:p-7">
                <div className="mb-4">
                  <div className="text-[0.7rem] font-bold tracking-[1.5px] uppercase text-gold mb-1">Challenge</div>
                  <div className="text-sm text-foreground leading-relaxed">{c.challenge}</div>
                </div>
                <div className="mb-4">
                  <div className="text-[0.7rem] font-bold tracking-[1.5px] uppercase text-gold mb-1">What We Did</div>
                  <div className="text-sm text-foreground leading-relaxed">{c.solution}</div>
                </div>
                <div className="bg-primary rounded-[10px] p-4 flex items-center gap-3 mt-5">
                  <span className="text-[1.4rem] shrink-0">{c.resultIcon}</span>
                  <span className="text-sm font-semibold text-gold-light leading-snug">{c.result}</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Portfolio;
