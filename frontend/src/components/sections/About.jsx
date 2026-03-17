import aboutImg from "../../assets/about-facility.png";

export default function About() {
  return (
    <section className="bg-[#0a0a0a] py-24 px-8" data-purpose="about-section" id="about">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="w-full lg:w-1/2">
          <h2 className="font-display font-black text-5xl md:text-6xl leading-tight mb-8">
            WE ARE NOT JUST A GYM. WE ARE A <span className="text-gymGold">COMMUNITY.</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed">
            Founded in 2023, Fitness Sports Center was born from a vision to create more than just a workout space. We&apos;ve built an ecosystem where luxury meets raw intensity. Our facility is designed for those who demand more from themselves and their environment, providing every tool necessary to redefine what&apos;s possible.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <div className="px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-bold text-white shadow-lg bg-[#222222]">
              <svg
                className="lucide lucide-dumbbell"
                fill="none"
                height="20"
                stroke="#D4A32A"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M14.4 14.4 9.6 9.6" />
                <path d="M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.767a2 2 0 1 1-2.829-2.828l1.768-1.767C11.5 14.333 11 13 11 12s.5-2.333 2-3.833l1.768-1.767a2 2 0 1 1 2.828-2.829l1.768 1.768a2 2 0 1 1 2.828 2.828l-1.767 1.768a2 2 0 1 1 2.828 2.828l-5.657 5.657Z" />
                <path d="m7.343 16.657-1.768 1.767a2 2 0 1 1-2.828-2.828l1.767-1.767a2 2 0 1 1-2.828-2.829l5.657-5.657a2 2 0 1 1 2.828 2.829l-1.767 1.767a2 2 0 1 1 2.828 2.829l-1.768-1.768a2 2 0 1 1-2.828 2.828Z" />
              </svg>
              50+ MACHINES
            </div>

            <div className="px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-bold text-white shadow-lg bg-[#222222]">
              <svg
                className="lucide lucide-users"
                fill="none"
                height="20"
                stroke="#D4A32A"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              EXPERT TRAINERS
            </div>

            <div className="px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-bold text-white shadow-lg bg-[#222222]">
              <svg
                className="lucide lucide-clock"
                fill="none"
                height="20"
                stroke="#D4A32A"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              24/7 ACCESS
            </div>
          </div>

          <a
            className="inline-block px-10 py-4 border-2 border-gymGold text-gymGold font-bold uppercase tracking-wider rounded-full hover:bg-gymGold hover:text-black btn-transition mt-8"
            href="#"
          >
            Meet Our Trainers
          </a>
        </div>

        <div className="w-full lg:w-1/2">
          <div className="relative group h-[500px] w-full">
            <img
              alt="Heavy Weights Gym Facility"
              className="w-full h-full object-cover rounded-xl shadow-2xl"
              src={aboutImg}
            />
          </div>
        </div>
      </div>
    </section>
  );
}