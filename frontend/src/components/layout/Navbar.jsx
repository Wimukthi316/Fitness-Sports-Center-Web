import logoSrc from '../../assets/logo.png';

const NAV_LINKS = ['Home', 'About', 'Services', 'Contact'];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-1/2 -translate-x-1/2 z-50 bg-black/50 backdrop-blur-xl border border-white/10 mt-6 mx-auto w-[95%] max-w-7xl rounded-full shadow-2xl transition-all duration-300">
      <div className="px-8 py-3">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img
              alt="Logo"
              className="w-12 h-12 rounded-full object-cover"
              src={logoSrc}
            />
            <span className="ml-3 font-display font-black uppercase tracking-tighter flex items-center gap-1.5 text-2xl">
              <span className="text-gymGold">FITNESS</span>
              <span className="text-white">SPORTS CENTER</span>
            </span>
          </div>

          {/* Desktop nav links */}
          <div className="hidden md:flex space-x-10 items-center">
            {NAV_LINKS.map((label) => (
              <a
                key={label}
                className="relative font-bold uppercase tracking-widest hover:text-gymGold transition-colors group text-sm"
                href="#"
              >
                {label}
                <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-gymGold transition-all duration-300 group-hover:w-full group-hover:left-0" />
              </a>
            ))}
          </div>

          {/* CTA button */}
          <div className="hidden md:block">
            <a
              className="bg-gymGold text-black px-6 rounded-full uppercase text-[10px] hover:bg-yellow-600 btn-transition shadow-lg block py-3 font-extrabold tracking-wide"
              href="#"
            >
              Join Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden">
            <button className="text-white p-2" type="button">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}
