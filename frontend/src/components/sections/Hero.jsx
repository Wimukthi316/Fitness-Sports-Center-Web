import heroBg from "../../assets/hero-bg.jpg";
import BlurText from "../ui/BlurText";

export default function Hero() {
  return (
    <main
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-32 md:pt-40"
      data-purpose="hero-banner"
      id="hero"
    >
      <div className="absolute inset-0 z-0">
        <img
          alt="Dark Moody Gym Atmosphere"
          className="hero-bg-image h-full w-full object-cover object-center grayscale opacity-60 md:object-[center_30%]"
          src={heroBg}
        />
        <div className="hero-gradient-overlay absolute inset-0"></div>
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
        <h1 className="font-display mb-6 flex flex-col items-center justify-center text-center text-5xl font-black leading-none tracking-tight md:text-7xl lg:text-[6rem]">
          <span className="mb-2 block text-white">
            <BlurText text="FORGE YOUR LEGACY." delay={1.3} />
          </span>
          <span className="mb-2 block text-gymGold">
            <BlurText text="BUILD YOUR ULTIMATE" delay={1.8} />
          </span>
          <span className="block text-gymGold">
            <BlurText text="PHYSIQUE." delay={2.2} />
          </span>
        </h1>

        <p className="font-sans mb-10 max-w-xl text-base leading-relaxed text-gray-300 md:max-w-2xl md:text-lg lg:text-xl mx-auto">
          Experience the pinnacle of high-end fitness. Our elite environment combines premium equipment
          with expert coaching to help you crush your limits and achieve greatness.
        </p>

        <div className="mb-10 flex flex-col items-center justify-center gap-4 sm:flex-row" data-purpose="hero-ctas">
          <a
            className="btn-transition w-full rounded-full bg-gymGold/85 px-10 py-4 text-center font-extrabold uppercase tracking-wide text-black backdrop-blur-md hover:bg-yellow-600 sm:w-auto"
            href="#"
          >
            Start Your Journey
          </a>
          <a
            className="btn-transition w-full rounded-full border-2 border-gymGold px-10 py-4 text-center font-extrabold uppercase tracking-wide text-gymGold hover:bg-gymGold hover:text-black sm:w-auto"
            href="#"
          >
            View Memberships
          </a>
        </div>

        <div className="grid grid-cols-2 items-center justify-items-center gap-8 opacity-80 md:flex md:justify-center md:space-x-12" data-purpose="trust-badges">
          <div className="flex items-center space-x-3">
            <svg className="h-8 w-8 text-gymGold" fill="currentColor" viewBox="0 0 20 20">
              <path
                clipRule="evenodd"
                d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 000.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                fillRule="evenodd"
              />
            </svg>
            <span className="font-sans text-sm font-semibold uppercase tracking-widest text-white">Certified Trainers</span>
          </div>

          <div className="flex items-center space-x-3">
            <svg className="h-8 w-8 text-gymGold" fill="currentColor" viewBox="0 0 20 20">
              <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 000.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 000.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
            </svg>
            <span className="font-sans text-sm font-semibold uppercase tracking-widest text-white">Premium Equipment</span>
          </div>
        </div>
      </div>
    </main>
  );
}