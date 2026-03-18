import { motion } from "framer-motion";
import { Instagram, Twitter } from "lucide-react";

const TRAINERS = [
  {
    name: "ALEX THORNE",
    title: "STRENGTH MASTER",
    imageUrl: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=500&auto=format&fit=crop",
  },
  {
    name: "SARAH CHEN",
    title: "ENDURANCE EXPERT",
    imageUrl: "https://images.unsplash.com/photo-1641808886171-3d300caed21a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA3fHxneW0lMjBnaXJsfGVufDB8fDB8fHww",
  },
  {
    name: "MIKE ROSS",
    title: "MOBILITY COACH",
    imageUrl: "https://images.unsplash.com/photo-1613685044678-0a9ae422cf5a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D",
  },
];

export default function Trainers() {
  return (
    <section className="bg-[#0a0a0a] py-24 md:py-32" data-purpose="trainers-section" id="trainers">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <header className="text-center mb-14">
          <p className="font-sans text-gymGold text-sm tracking-widest uppercase mb-4">EXPERT COACHES</p>
          <h2 className="font-display text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight">
            LED BY MASTERS
          </h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TRAINERS.map((trainer, index) => (
            <motion.div
              key={trainer.name}
              className="bg-[#111111] rounded-2xl p-8 md:p-10 hover:-translate-y-2 transition-transform duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
            >
              <img
                alt={trainer.name}
                className="w-32 h-32 rounded-full object-cover mx-auto mb-8"
                src={trainer.imageUrl}
              />

              <h3 className="font-display text-center text-white text-2xl md:text-3xl font-bold uppercase tracking-tight mb-2">
                {trainer.name}
              </h3>

              <p className="font-sans text-center text-gymGold text-xs md:text-sm uppercase tracking-[0.18em] mb-8">
                {trainer.title}
              </p>

              <div className="flex items-center justify-center gap-5 text-gymGold">
                <a
                  href="https://x.com"
                  aria-label={`${trainer.name} Twitter`}
                  className="hover:text-yellow-500 transition-colors"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/koncepthive/"
                  aria-label={`${trainer.name} Instagram`}
                  className="hover:text-yellow-500 transition-colors"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
