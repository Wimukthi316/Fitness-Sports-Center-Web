import { useMemo, useState } from "react";
import STIcon from "../../assets/icons/ST.png";
import CFIcon from "../../assets/icons/CF.png";
import CZIcon from "../../assets/icons/CZ.png";
import YMIcon from "../../assets/icons/YM.png";
import PCIcon from "../../assets/icons/PC.png";
import BoxIcon from "../../assets/icons/Box.png";

const SERVICES = [
  {
    name: "Strength Training",
    description: "Build raw power with premium free weights, racks, and performance tracking.",
    icon: <img src={STIcon} alt="Strength Training" className="w-8 h-8 md:w-10 md:h-10 mb-4 md:mb-5" />,
  },
  {
    name: "Cardio Zone",
    description: "Boost endurance in a dedicated zone with treadmills, bikes, and rowers.",
    icon: <img src={CZIcon} alt="Cardio Zone" className="w-8 h-8 md:w-10 md:h-10 mb-4 md:mb-5" />,
  },
  {
    name: "Personal Coaching",
    description: "One-on-one programming, form correction, and accountability from experts.",
    icon: <img src={PCIcon} alt="Personal Coaching" className="w-8 h-8 md:w-10 md:h-10 mb-4 md:mb-5" />,
  },
  {
    name: "CrossFit",
    description: "High-intensity functional sessions designed to push your limits safely.",
    icon: <img src={CFIcon} alt="CrossFit" className="w-8 h-8 md:w-10 md:h-10 mb-4 md:mb-5" />,
  },
  {
    name: "Yoga & Mobility",
    description: "Improve flexibility, recovery, and joint health with guided mobility flows.",
    icon: <img src={YMIcon} alt="Yoga & Mobility" className="w-8 h-8 md:w-10 md:h-10 mb-4 md:mb-5" />,
  },
  {
    name: "Boxing",
    description: "Train speed, conditioning, and confidence with pad work and bag drills.",
    icon: <img src={BoxIcon} alt="Boxing" className="w-8 h-8 md:w-10 md:h-10 mb-4 md:mb-5" />,
  },
];

export default function Services() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredServices = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();

    if (!term) {
      return SERVICES;
    }

    return SERVICES.filter((service) => service.name.toLowerCase().includes(term));
  }, [searchTerm]);

  return (
    <section className="bg-black py-16 px-6 md:py-24 md:px-8" data-purpose="services-section" id="services">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-gymGold font-sans font-bold uppercase tracking-[0.2em] text-sm mb-4 block">OUR SERVICES</span>
          <h2 className="text-white font-display font-black uppercase text-3xl sm:text-4xl md:text-5xl tracking-tight">EVERYTHING YOU NEED TO EXCEL</h2>
        </div>

        <div className="relative max-w-xl mx-auto mb-12">
          <div className="relative">
            <svg className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gymGold pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            <input className="w-full rounded-full border border-white/10 bg-[#111111] py-3 md:py-4 pl-14 pr-6 text-sm md:text-base text-white placeholder:text-gray-500 outline-none focus:border-gymGold transition-colors" id="service-search" onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search services (e.g., Cardio, Boxing)..." type="text" value={searchTerm} />
          </div>
        </div>

        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {filteredServices.map((service) => (
              <article
                key={service.name}
                className="rounded-2xl border border-white/10 bg-[#111111] p-5 md:p-7 shadow-xl hover:border-gymGold/50 transition-colors"
              >
                {service.icon}
                <h3 className="text-2xl font-bold text-white mb-3">{service.name}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </article>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-300 text-lg">No services found</p>
        )}
      </div>
    </section>
  );
}