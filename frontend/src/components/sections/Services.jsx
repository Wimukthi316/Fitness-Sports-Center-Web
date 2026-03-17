import { useMemo, useState } from "react";

const SERVICES = [
  {
    name: "Strength Training",
    description: "Build raw power with premium free weights, racks, and performance tracking.",
  },
  {
    name: "Cardio Zone",
    description: "Boost endurance in a dedicated zone with treadmills, bikes, and rowers.",
  },
  {
    name: "Personal Coaching",
    description: "One-on-one programming, form correction, and accountability from experts.",
  },
  {
    name: "CrossFit",
    description: "High-intensity functional sessions designed to push your limits safely.",
  },
  {
    name: "Yoga & Mobility",
    description: "Improve flexibility, recovery, and joint health with guided mobility flows.",
  },
  {
    name: "Boxing",
    description: "Train speed, conditioning, and confidence with pad work and bag drills.",
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
    <section className="bg-black py-24 px-8" data-purpose="services-section" id="services">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display font-black text-5xl md:text-6xl text-white leading-tight">
            ELITE TRAINING <span className="text-gymGold">SERVICES</span>
          </h2>
          <p className="text-gray-400 mt-5 max-w-2xl mx-auto text-lg">
            Choose your path and train with precision. Search a service to find the perfect fit.
          </p>
        </div>

        <div className="max-w-xl mx-auto mb-12">
          <label className="sr-only" htmlFor="service-search">
            Search services
          </label>
          <input
            className="w-full rounded-full border border-gymGold/40 bg-[#111111] px-6 py-4 text-white placeholder:text-gray-500 outline-none focus:border-gymGold"
            id="service-search"
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Search services..."
            type="text"
            value={searchTerm}
          />
        </div>

        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <article
                key={service.name}
                className="rounded-2xl border border-white/10 bg-[#111111] p-7 shadow-xl hover:border-gymGold/50 transition-colors"
              >
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