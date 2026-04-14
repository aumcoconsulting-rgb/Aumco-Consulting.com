import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
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

const MobileMenu = ({ menuOpen, setMenuOpen }: { menuOpen: boolean; setMenuOpen: (v: boolean) => void }) => {
  if (typeof document === "undefined") return null;

  return createPortal(
    <>
      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-primary/30 backdrop-blur-sm z-[998] md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
      {/* Drawer */}
      <nav
        className={`${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } fixed top-0 right-0 h-full w-[280px] bg-card border-l border-gold/15 flex flex-col items-start gap-1 p-8 pt-20 shadow-2xl z-[999] transition-transform duration-300 ease-in-out md:hidden`}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="no-underline text-foreground text-sm font-medium px-3 py-3 rounded-md hover:text-primary hover:bg-cream-dark transition-colors w-full min-h-[44px] flex items-center"
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className="bg-primary text-primary-foreground font-semibold px-[18px] py-[9px] rounded-lg mt-4 text-center text-sm no-underline hover:bg-gold hover:-translate-y-px transition-all w-full min-h-[44px] flex items-center justify-center"
        >
          Book Free Call
        </a>
      </nav>
    </>,
    document.body
  );
};

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
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
          className="flex flex-col justify-center items-center w-11 h-11 p-1 cursor-pointer md:hidden relative z-[1000]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span className={`block w-6 h-0.5 bg-primary rounded-sm transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[3px]" : ""}`} />
          <span className={`block w-6 h-0.5 bg-primary rounded-sm transition-all duration-300 mt-[5px] ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-primary rounded-sm transition-all duration-300 mt-[5px] ${menuOpen ? "-rotate-45 -translate-y-[8px]" : ""}`} />
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="no-underline text-foreground text-sm font-medium px-3 py-2 rounded-md hover:text-primary hover:bg-cream-dark transition-colors min-h-[44px] flex items-center"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-primary text-primary-foreground font-semibold px-[18px] py-[9px] rounded-lg ml-2 text-center text-sm no-underline hover:bg-gold hover:-translate-y-px transition-all min-h-[44px] flex items-center justify-center"
          >
            Book Free Call
          </a>
        </nav>
      </header>

      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </>
  );
};

export default Header;
