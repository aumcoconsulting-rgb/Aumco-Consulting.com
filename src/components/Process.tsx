import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    num: 1,
    title: "We Call You",
    desc: "Within 24 hours of your enquiry, our team reaches out to schedule a free 30-minute strategy call at your convenience.",
  },
  {
    num: 2,
    title: "We Understand Your Needs",
    desc: "We listen to your business goals, challenges, and where you want to be — then identify exactly how SSC can help you get there.",
  },
  {
    num: 3,
    title: "We Send a Plan",
    desc: "You receive a clear, custom action plan with services, timelines, and pricing — no obligation, no pressure.",
  },
];

const Process = () => (
  <section id="process" className="py-16 md:py-20 px-[5%] bg-primary">
    <div className="max-w-[1100px] mx-auto">
      <ScrollReveal>
        <span className="inline-block text-[0.72rem] font-bold tracking-[2.5px] uppercase text-gold-light mb-3">
          How It Works
        </span>
        <h2 className="font-heading text-[clamp(1.8rem,3.5vw,2.6rem)] text-primary-foreground leading-[1.2] mb-3.5">
          What Happens After You Book
        </h2>
        <p className="text-base text-primary-foreground/55 max-w-[520px] leading-[1.7] mb-8 md:mb-12">
          No confusion, no waiting. Here's exactly what to expect after you reach out.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 relative mt-2.5">
        <div className="hidden md:block absolute top-9 left-[calc(16.66%+20px)] right-[calc(16.66%+20px)] h-0.5 bg-gold/30" />

        {steps.map((step, i) => (
          <ScrollReveal key={step.num} delay={i * 200}>
            <div className="text-center px-6 relative z-10">
              <div className="w-[72px] h-[72px] rounded-full bg-gold text-primary font-heading text-2xl font-black flex items-center justify-center mx-auto mb-5 shadow-[0_0_0_6px_rgba(201,152,58,0.15)] hover:shadow-[0_0_0_10px_rgba(201,152,58,0.2)] transition-shadow">
                {step.num}
              </div>
              <h4 className="font-heading text-[1.1rem] text-primary-foreground mb-2.5">{step.title}</h4>
              <p className="text-sm text-primary-foreground/60 leading-[1.7]">{step.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={600}>
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block no-underline font-body font-semibold text-sm px-7 py-3.5 rounded-lg bg-gold text-primary hover:bg-gold-light hover:-translate-y-0.5 transition-all min-h-[44px]"
          >
            Book Your Free Call Now →
          </a>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default Process;
