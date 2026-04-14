import ScrollReveal from "./ScrollReveal";

const aboutCards = [
  {
    title: "Our Mission",
    text: "To make world-class business consulting and marketing accessible to every ambitious Indian founder — regardless of size or budget.",
  },
  {
    title: "Our Approach",
    text: "We combine strategic consulting, hands-on execution, and AI-powered tools to deliver results — not just reports.",
    bullets: [
      "Strategy-first consulting",
      "Brand-building expertise",
      "AI & automation integration",
      "Affordable for MSMEs & startups",
    ],
  },
];

const About = () => (
  <section id="about" className="py-16 md:py-20 px-[5%] bg-card">
    <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[60px] items-start">
      <ScrollReveal direction="left">
        <div>
          <span className="inline-block text-[0.72rem] font-bold tracking-[2.5px] uppercase text-gold mb-3">
            Who We Are
          </span>
          <h2 className="font-heading text-[clamp(1.8rem,3.5vw,2.6rem)] text-primary leading-[1.2] mb-3.5">
            Built for Founders. Driven by Growth.
          </h2>
          <p className="text-base text-muted-foreground max-w-[520px] leading-[1.7] mb-8 md:mb-12">
            Aumco Consulting is a Chennai-based B2B consulting and marketing agency that partners with startups, small businesses, and MSMEs to build strong foundations and scale sustainably.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal direction="right" delay={150}>
        <div className="pt-0 md:pt-2">
          {aboutCards.map((card, i) => (
            <div
              key={card.title}
              className="bg-background rounded-lg p-6 md:p-7 mb-4 border-l-[3px] border-gold hover:shadow-md transition-shadow"
            >
              <h3 className="font-heading text-[1.15rem] text-primary mb-2.5">{card.title}</h3>
              <p className="text-sm text-muted-foreground leading-[1.7]">{card.text}</p>
              {card.bullets && (
                <ul className="mt-3.5 flex flex-col gap-2">
                  {card.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2.5 text-sm text-foreground">
                      <span className="text-gold text-[0.65rem] shrink-0">✦</span>
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default About;
