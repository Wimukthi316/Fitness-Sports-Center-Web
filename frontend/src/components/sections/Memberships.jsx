import { motion } from "framer-motion";
import { Check } from "lucide-react";

const PLANS = [
  {
    name: "BASIC",
    price: "$49",
    features: [
      "Access to Gym Floor",
      "Locker Room Access",
      "Free WiFi",
    ],
    isPopular: false,
  },
  {
    name: "PRO",
    price: "$89",
    features: [
      "Everything in Basic",
      "All Group Classes",
      "2 Guest Passes/Month",
      "Sauna Access",
    ],
    isPopular: true,
  },
  {
    name: "ELITE",
    price: "$149",
    features: [
      "Everything in Pro",
      "Personal Trainer (4/mo)",
      "Recovery Zone Access",
      "Premium Towel Service",
    ],
    isPopular: false,
  },
];

export default function Memberships() {
  return (
    <section className="bg-black py-24 md:py-32" data-purpose="memberships-section" id="memberships">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <header className="text-center mb-14">
          <p className="font-sans text-gymGold text-sm md:text-base font-semibold uppercase tracking-[0.2em] mb-4">
            MEMBERSHIP PLANS
          </p>
          <h2 className="font-display text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight">
            CHOOSE YOUR PATH
          </h2>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PLANS.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className={`relative bg-[#111111] rounded-2xl p-10 flex flex-col ${
                plan.isPopular
                  ? "border-2 border-gymGold lg:scale-105"
                  : "border border-white/10"
              }`}
            >
              {plan.isPopular ? (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gymGold px-4 py-1.5 text-xs font-sans font-bold uppercase tracking-widest text-black">
                  MOST POPULAR
                </span>
              ) : null}

              <h3 className="font-display text-white text-3xl font-bold uppercase mb-5 text-center">
                {plan.name}
              </h3>

              <div className="text-center mb-8">
                <span className="font-display text-white text-5xl md:text-6xl font-extrabold leading-none">
                  {plan.price}
                </span>
                <span className="font-sans text-gray-400 text-sm md:text-base ml-2">/month</span>
              </div>

              <ul className="space-y-4 mb-10 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 font-sans text-gray-300 text-sm md:text-base">
                    <Check className="w-4 h-4 text-gymGold flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className={`w-full rounded-full py-3.5 font-sans text-sm md:text-base font-bold uppercase tracking-wider transition-colors ${
                  plan.isPopular
                    ? "bg-gymGold text-black hover:bg-yellow-500"
                    : "border-2 border-gymGold text-gymGold bg-transparent hover:bg-gymGold hover:text-black"
                }`}
              >
                GET STARTED
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
