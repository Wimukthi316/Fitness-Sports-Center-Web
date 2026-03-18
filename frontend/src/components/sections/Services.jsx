import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import GIcon from "../../assets/icons/G.png";
import LIcon from "../../assets/icons/L.png";
import CIcon from "../../assets/icons/C.png";
import AIcon from "../../assets/icons/A.png";
import RIcon from "../../assets/icons/R.png";
import SIcon from "../../assets/icons/S.png";

const SERVICES = [
  {
    name: "ADVANCED STRENGTH",
    description: "Custom-engineered plate-loaded machines and competition-grade free weights for maximum hypertrophy and power.",
    icon: <img src={GIcon} alt="ADVANCED STRENGTH" className="w-8 h-8 md:w-10 md:h-10 mb-4 md:mb-5" />,
  },
  {
    name: "ATHLETIC PERFORMANCE",
    description: "Indoor turf, sleds, and plyometric zones designed to build explosive power, speed, and agility.",
    icon: <img src={AIcon} alt="ATHLETIC PERFORMANCE" className="w-8 h-8 md:w-10 md:h-10 mb-4 md:mb-5" />,
  },
  {
    name: "RECOVERY LOUNGE",
    description: "Cryotherapy, infrared saunas, and compression therapy to ensure your body recovers as hard as it trains.",
    icon: <img src={RIcon} alt="RECOVERY LOUNGE" className="w-8 h-8 md:w-10 md:h-10 mb-4 md:mb-5" />,
  },
  {
    name: "STEAM & SAUNA",
    description: "Relax and recover your muscles in our premium steam and sauna rooms after a hard workout.",
    icon: <img src={SIcon} alt="STEAM & SAUNA" className="w-8 h-8 md:w-10 md:h-10 mb-4 md:mb-5" />,
  },
  {
    name: "NUTRITION BAR",
    description: "Fuel your body with freshly prepared protein shakes, smoothies, and healthy snacks at our juice bar.",
    icon: <img src={CIcon} alt="NUTRITION BAR" className="w-8 h-8 md:w-10 md:h-10 mb-4 md:mb-5" />,
  },
  {
    name: "PRIVATE LOCKERS",
    description: "Secure and spacious locker rooms with private showers and premium amenities for your comfort.",
    icon: <img src={LIcon} alt="PRIVATE LOCKERS" className="w-8 h-8 md:w-9 md:h-11 mb-4 md:mb-5" />,
  },
];

export default function Services() {
  const MotionArticle = motion.article;
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
          <h2 className="text-white font-display font-black uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-center">EVERYTHING YOU NEED TO EXCEL</h2>
        </div>

        <div className="relative max-w-xl mx-auto mb-12">
          <div className="relative">
            <svg className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gymGold pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            <input className="font-sans w-full rounded-full border border-white/10 bg-[#111111] py-3 md:py-4 pl-14 pr-6 text-sm md:text-base text-white placeholder:text-gray-500 outline-none focus:border-gymGold transition-colors" id="service-search" onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search services (e.g., Cardio, Boxing)..." type="text" value={searchTerm} />
          </div>
        </div>

        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredServices.map((service, index) => (
              <MotionArticle
                key={service.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="rounded-2xl border-2 border-gymGold/20 hover:border-gymGold bg-[#111111] p-6 md:p-8 shadow-xl transition-colors"
              >
                {service.icon}
                <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-3">{service.name}</h3>
                <p className="font-sans text-sm md:text-base text-gray-400 leading-relaxed">{service.description}</p>
              </MotionArticle>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-300 text-lg">No services found</p>
        )}
      </div>
    </section>
  );
}