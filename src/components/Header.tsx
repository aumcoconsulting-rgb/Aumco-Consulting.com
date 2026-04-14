import { useState, useEffect } from "react";
import aumcoLogo from "@/assets/aumco-logo.png";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#industries", label: "Industries" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#offers", label: "Pricing" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 flex items-center justify-between h-[90px] px-[5%] bg-card/95 backdrop-blur-[10px] border-b border-gold/15 transition-shadow ${
        scrolled ? "shadow-lg" : ""
      }`}
    >
      <a href="#home" className="flex items-center no-underline shrink-0">
        <img src={aumcoLogo} alt="Aumco Consulting" className="h-60 md:h-72 w-auto" />
      </a>

      {/* Mobile Toggle */}
      <button
        className="flex flex-col gap-[5px] p-1 cursor-pointer md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        <span className="block w-6 h-0.5 bg-primary rounded-sm" />
        <span className="block w-6 h-0.5 bg-primary rounded-sm" />
        <span className="block w-6 h-0.5 bg-primary rounded-sm" />
      </button>

      {/* Nav */}
      <nav
        className={`${
          menuOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row items-center gap-1 absolute md:static top-[68px] left-0 right-0 bg-card md:bg-transparent p-4 md:p-0 border-b md:border-0 border-input shadow-lg md:shadow-none z-50`}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="no-underline text-foreground text-sm font-medium px-3 py-2 rounded-md hover:text-primary hover:bg-cream-dark transition-colors w-full md:w-auto"
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className="bg-primary text-primary-foreground font-semibold px-[18px] py-[9px] rounded-lg ml-0 md:ml-2 mt-2 md:mt-0 text-center text-sm no-underline hover:bg-gold hover:-translate-y-px transition-all w-full md:w-auto"
        >
          Book Free Call
        </a>
      </nav>
    </header>
  );
};

export default Header;
