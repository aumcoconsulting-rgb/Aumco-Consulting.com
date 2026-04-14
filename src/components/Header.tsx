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
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 flex items-center justify-between h-[72px] md:h-[90px] px-[5%] bg-card/95 backdrop-blur-[10px] border-b border-gold/15 transition-shadow ${
        scrolled ? "shadow-lg" : ""
      }`}
    >
      <a href="#home" className="flex items-center no-underline shrink-0">
        <img src={aumcoLogo} alt="Aumco Consulting" className="h-48 md:h-72 w-auto" loading="eager" />
      </a>

      {/* Mobile Toggle */}
      <button
        className="flex flex-col justify-center items-center w-11 h-11 p-1 cursor-pointer md:hidden relative z-[60]"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        <span className={`block w-6 h-0.5 bg-primary rounded-sm transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[3px]" : ""}`} />
        <span className={`block w-6 h-0.5 bg-primary rounded-sm transition-all duration-300 mt-[5px] ${menuOpen ? "opacity-0" : ""}`} />
        <span className={`block w-6 h-0.5 bg-primary rounded-sm transition-all duration-300 mt-[5px] ${menuOpen ? "-rotate-45 -translate-y-[8px]" : ""}`} />
      </button>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-primary/30 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Nav */}
      <nav
        className={`${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } md:translate-x-0 fixed md:static top-0 right-0 h-full md:h-auto w-[280px] md:w-auto bg-card md:bg-transparent flex flex-col md:flex-row items-start md:items-center gap-1 p-8 pt-20 md:p-0 shadow-2xl md:shadow-none z-50 transition-transform duration-300 ease-in-out`}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="no-underline text-foreground text-sm font-medium px-3 py-3 md:py-2 rounded-md hover:text-primary hover:bg-cream-dark transition-colors w-full md:w-auto min-h-[44px] flex items-center"
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className="bg-primary text-primary-foreground font-semibold px-[18px] py-[9px] rounded-lg ml-0 md:ml-2 mt-4 md:mt-0 text-center text-sm no-underline hover:bg-gold hover:-translate-y-px transition-all w-full md:w-auto min-h-[44px] flex items-center justify-center"
        >
          Book Free Call
        </a>
      </nav>
    </header>
  );
};

export default Header;
