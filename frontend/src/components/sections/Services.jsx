import { useMemo, useState } from "react";

const SERVICES = [
  {
    name: "Strength Training",
    description: "Build raw power with premium free weights, racks, and performance tracking.",
    icon: (
      <svg className="w-10 h-10 text-gymGold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          d="M14.4 14.4 9.6 9.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.767a2 2 0 1 1-2.829-2.828l1.768-1.767C11.5 14.333 11 13 11 12s.5-2.333 2-3.833l1.768-1.767a2 2 0 1 1 2.828-2.829l1.768 1.768a2 2 0 1 1 2.828 2.828l-1.767 1.768a2 2 0 1 1 2.828 2.828l-5.657 5.657Z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="m7.343 16.657-1.768 1.767a2 2 0 1 1-2.828-2.828l1.767-1.767a2 2 0 1 1-2.828-2.829l5.657-5.657a2 2 0 1 1 2.828 2.829l-1.767 1.767a2 2 0 1 1 2.828 2.829l-1.768-1.768a2 2 0 1 1-2.828 2.828Z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    name: "Cardio Zone",
    description: "Boost endurance in a dedicated zone with treadmills, bikes, and rowers.",
    icon: (
      <svg className="w-10 h-10 text-gymGold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          d="M22 12h-4l-3 9L9 3l-3 9H2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    name: "Personal Coaching",
    description: "One-on-one programming, form correction, and accountability from experts.",
    icon: (
      <svg className="w-10 h-10 text-gymGold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <circle cx="12" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </svg>
    ),
  },
  {
    name: "CrossFit",
    description: "High-intensity functional sessions designed to push your limits safely.",
    icon: (
      <svg className="w-10 h-10 text-gymGold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          d="M3 12h4l2-4 4 8 2-4h6"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    name: "Yoga & Mobility",
    description: "Improve flexibility, recovery, and joint health with guided mobility flows.",
    icon: (
      <svg className="w-10 h-10 text-gymGold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path
          d="M12 7v5l3 3"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    name: "Boxing",
    description: "Train speed, conditioning, and confidence with pad work and bag drills.",
    icon: (
      <svg className="w-10 h-10 text-gymGold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path
          d="M12 8v8M8 12h8"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    ),
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
          <div className="relative">
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gymGold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
            <input
              className="w-full rounded-full border border-gymGold/40 bg-[#111111] pl-12 pr-6 py-4 text-white placeholder:text-gray-500 outline-none focus:border-gymGold"
              id="service-search"
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search services..."
              type="text"
              value={searchTerm}
            />
          </div>
        </div>

        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <article
                key={service.name}
                className="rounded-2xl border border-white/10 bg-[#111111] p-7 shadow-xl hover:border-gymGold/50 transition-colors"
              >
                <div className="mb-5">{service.icon}</div>
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