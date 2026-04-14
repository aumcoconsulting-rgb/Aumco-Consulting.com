import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    initials: "RK",
    name: "Rajesh Kumar",
    text: "SSC helped us go from idea to registered business in under 2 weeks. They handled our MSME registration, GST setup, and logo design — all in one package. Highly recommended for any first-time founder.",
  },
  {
    initials: "PM",
    name: "Priya Mehta",
    text: "Our social media went from zero presence to 40K followers in 60 days. The content strategy and brand identity they built for us completely changed how clients perceive our agency.",
  },
  {
    initials: "AS",
    name: "Arjun Sharma",
    text: "The Business Growth Suite was worth every rupee. They built our website, set up our CRM, and created an automated lead follow-up system. We now close 40% more leads with less manual work.",
  },
];

const Testimonials = () => (
  <section id="testimonials" className="py-16 md:py-20 px-[5%] bg-primary">
    <div className="max-w-[1100px] mx-auto">
      <ScrollReveal>
        <span className="inline-block text-[0.72rem] font-bold tracking-[2.5px] uppercase text-gold-light mb-3">
          Client Stories
        </span>
        <h2 className="font-heading text-[clamp(1.8rem,3.5vw,2.6rem)] text-primary-foreground leading-[1.2] mb-3.5">
          What Our Clients Say
        </h2>
        <p className="text-base text-primary-foreground/55 max-w-[520px] leading-[1.7] mb-8 md:mb-12">
          Real results from real businesses we've helped launch and grow.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {testimonials.map((t, i) => (
          <ScrollReveal key={t.name} delay={i * 150}>
            <div className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg p-6 md:p-7 hover:bg-primary-foreground/[0.08] hover:-translate-y-1 transition-all h-full">
              <div className="text-gold-light text-sm mb-3.5 tracking-[2px]">★★★★★</div>
              <p className="text-sm text-primary-foreground/80 leading-[1.75] mb-5 italic">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-[42px] h-[42px] rounded-full bg-gold flex items-center justify-center font-bold text-base text-primary shrink-0">
                  {t.initials}
                </div>
                <div className="text-sm font-bold text-primary-foreground">{t.name}</div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
