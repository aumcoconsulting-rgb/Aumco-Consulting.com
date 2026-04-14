import { useState } from "react";

const tabs = [
  {
    label: "Business Consulting",
    icon: "📊",
    items: [
      { icon: "🎯", name: "Business Strategy" },
      { icon: "📈", name: "Business Development" },
      { icon: "⚙️", name: "Operations & Process" },
      { icon: "🚀", name: "Startup Support" },
      { icon: "📋", name: "Market Research" },
      { icon: "⚖️", name: "Legal & Compliance" },
    ],
  },
  {
    label: "Marketing & Branding",
    icon: "🎨",
    items: [
      { icon: "📱", name: "Digital Marketing" },
      { icon: "🏷️", name: "Branding" },
      { icon: "🎨", name: "Design Services" },
      { icon: "📲", name: "Social Media" },
      { icon: "🤖", name: "Marketing Automation" },
    ],
  },
  {
    label: "Technology",
    icon: "💻",
    items: [
      { icon: "🌐", name: "Website Development" },
      { icon: "📊", name: "Analytics & Reporting" },
      { icon: "🔧", name: "CRM & Email Automation" },
      { icon: "🤖", name: "AI Marketing Automation" },
    ],
  },
];

const Services = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="services" className="py-20 px-[5%] bg-background">
      <div className="max-w-[1100px] mx-auto">
        <span className="inline-block text-[0.72rem] font-bold tracking-[2.5px] uppercase text-gold mb-3">
          What We Offer
        </span>
        <h2 className="font-heading text-[clamp(1.8rem,3.5vw,2.6rem)] text-primary leading-[1.2] mb-3.5">
          Services That Drive Results
        </h2>
        <p className="text-base text-muted-foreground max-w-[520px] leading-[1.7] mb-12">
          From strategy to execution — everything your business needs to launch, grow, and scale.
        </p>

        {/* Tabs */}
        <div className="flex gap-2 mb-9 flex-wrap">
          {tabs.map((tab, i) => (
            <button
              key={tab.label}
              onClick={() => setActive(i)}
              className={`font-body text-sm font-semibold px-6 py-2.5 rounded-lg border-[1.5px] cursor-pointer transition-all ${
                active === i
                  ? "bg-primary border-primary text-primary-foreground"
                  : "bg-card border-input text-muted-foreground hover:border-gold hover:text-primary"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tabs[active].items.map((item) => (
            <div
              key={item.name}
              className="bg-card rounded-lg p-6 border border-input hover:shadow-[0_8px_40px_rgba(13,27,46,0.10)] hover:-translate-y-[3px] transition-all"
            >
              <span className="text-2xl mb-3 block">{item.icon}</span>
              <h4 className="text-[0.95rem] font-semibold text-primary font-body">{item.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
