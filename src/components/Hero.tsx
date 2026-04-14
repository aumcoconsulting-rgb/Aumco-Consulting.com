const Hero = () => (
  <section id="home" className="bg-primary py-[100px] px-[5%] text-center relative overflow-hidden">
    {/* Glow */}
    <div className="absolute w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,_rgba(201,152,58,0.12)_0%,_transparent_70%)] top-[-200px] left-1/2 -translate-x-1/2 pointer-events-none" />

    <span className="inline-block bg-gold/15 text-gold-light text-xs font-semibold tracking-[2px] uppercase px-4 py-1.5 rounded-full border border-gold/30 mb-6 animate-fade-up">
      B2B Consulting & Marketing Agency
    </span>

    <h1 className="font-heading text-[clamp(2.4rem,5vw,3.8rem)] text-primary-foreground leading-[1.15] mb-3.5 animate-fade-up-delay-1">
      Empowering Your Business.<br />
      <em className="text-gold-light not-italic">Accelerating Your Growth.</em>
    </h1>

    <p className="font-body text-[clamp(1rem,2vw,1.25rem)] font-medium text-primary-foreground/75 tracking-wide mb-5 animate-fade-up-delay-2">
      {"\n"}
    </p>

    <p className="text-[1.05rem] text-primary-foreground/70 max-w-[580px] mx-auto mb-10 leading-[1.7] animate-fade-up-delay-3">
      We help startups and small businesses build strong brands, launch faster, and grow smarter — with consulting, marketing, and AI-powered automation.
    </p>

    <div className="flex gap-3.5 justify-center flex-wrap animate-fade-up-delay-4">
      <a
        href="#contact"
        className="inline-block no-underline font-body font-semibold text-sm px-7 py-3.5 rounded-lg bg-gold text-primary hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(201,152,58,0.4)] transition-all"
      >
        Book a Free Strategy Call →
      </a>
      <a
        href="#services"
        className="inline-block no-underline font-body font-semibold text-sm px-7 py-3.5 rounded-lg bg-transparent text-primary-foreground border-[1.5px] border-primary-foreground/35 hover:border-primary-foreground hover:bg-primary-foreground/[0.08] transition-all"
      >
        Explore Our Services
      </a>
    </div>
  </section>
);

export default Hero;
