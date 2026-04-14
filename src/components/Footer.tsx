const Footer = () => (
  <footer className="bg-primary text-primary-foreground/60 py-10 px-[5%]">
    <div className="max-w-[1100px] mx-auto flex items-center justify-between flex-wrap gap-4">
      <div className="flex gap-5 flex-wrap">
        {["About", "Services", "Pricing", "Contact"].map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="no-underline text-primary-foreground/50 text-sm hover:text-gold transition-colors"
          >
            {link}
          </a>
        ))}
      </div>
      <div className="text-xs">
        © {new Date().getFullYear()} Shilling Strategy Consulting. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
