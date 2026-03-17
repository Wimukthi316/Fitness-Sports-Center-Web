import heroBg from "../../assets/hero-bg.jpg";

export default function Hero() {
  return (
    <main
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32"
      data-purpose="hero-banner"
      id="hero"
    >
      <div className="absolute inset-0 z-0">
        <img
          alt="Dark Moody Gym Atmosphere"
          className="w-full h-full object-cover object-[center_30%] grayscale opacity-60"
          src={heroBg}
        />
        <div className="absolute inset-0 hero-gradient-overlay"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center">
        <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight mb-6 leading-none text-white text-center">
          FORGE YOUR LEGACY.
          <br />
          <span className="text-gymGold block mt-2">BUILD YOUR ULTIMATE</span>
          <span className="text-gymGold block">PHYSIQUE.</span>
        </h1>

        <p className="font-sans max-w-2xl mx-auto text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
          Experience the pinnacle of high-end fitness. Our elite environment combines premium equipment
          with expert coaching to help you crush your limits and achieve greatness.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10" data-purpose="hero-ctas">
          <a
            className="w-full sm:w-auto px-10 py-4 bg-gymGold/85 text-black font-extrabold uppercase tracking-wide hover:bg-yellow-600 btn-transition text-center rounded-full backdrop-blur-md"
            href="#"
          >
            Start Your Journey
          </a>
          <a
            className="w-full sm:w-auto px-10 py-4 border-2 border-gymGold text-gymGold font-extrabold uppercase tracking-wide hover:bg-gymGold hover:text-black btn-transition text-center rounded-full"
            href="#"
          >
            View Memberships
          </a>
        </div>

        <div className="grid grid-cols-2 justify-items-center items-center gap-8 md:flex md:justify-center md:items-center md:space-x-12 opacity-80" data-purpose="trust-badges">
          <div className="flex items-center space-x-3">
            <svg className="w-8 h-8 text-gymGold" fill="currentColor" viewBox="0 0 20 20">
              <path
                clipRule="evenodd"
                d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 000.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                fillRule="evenodd"
              />
            </svg>
            <span className="uppercase font-semibold tracking-tighter text-sm">Certified Trainers</span>
          </div>

          <div className="flex items-center space-x-3">
            <svg className="w-8 h-8 text-gymGold" fill="currentColor" viewBox="0 0 20 20">
              <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 000.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 000.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
            </svg>
            <span className="uppercase font-semibold tracking-tighter text-sm">Premium Equipment</span>
          </div>
        </div>
      </div>
    </main>
  );
}