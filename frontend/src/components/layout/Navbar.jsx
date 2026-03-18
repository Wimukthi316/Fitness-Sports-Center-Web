import { useEffect, useState } from "react";
import logoSrc from "../../assets/gym-logo.png";

const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLightMode, setIsLightMode] = useState(() => document.documentElement.classList.contains("light-mode"));

  useEffect(() => {
    const root = document.documentElement;
    const observer = new MutationObserver(() => {
      setIsLightMode(root.classList.contains("light-mode"));
    });

    observer.observe(root, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  const navTextClass = isLightMode ? "text-slate-900" : "text-white";
  const mobileMenuBgClass = isLightMode ? "bg-white/95" : "bg-black/90";
  const navbarBgClass = isLightMode ? "bg-white/90 border-slate-200" : "bg-black/50 border-white/10";

  return (
    <>
      <nav className={`fixed top-0 left-1/2 -translate-x-1/2 z-50 backdrop-blur-xl border mt-4 md:mt-6 mx-auto w-[92%] md:w-[95%] max-w-7xl rounded-full shadow-2xl transition-all duration-300 py-1.5 md:py-2 lg:py-2.5 ${navbarBgClass}`}>
        <div className="px-4 md:px-8">
          <div className="flex justify-between items-center h-12 md:h-16">

            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-2">
              <img
                alt="Logo"
                className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
                src={logoSrc}
              />
              <span className="hidden md:flex font-display font-black uppercase tracking-tighter items-center gap-1.5 text-2xl">
                <span className="text-gymGold">FITNESS</span>
                <span className={navTextClass}>SPORTS CENTER</span>
              </span>
            </div>

            {/* Desktop nav links */}
            <div className="hidden lg:flex space-x-10 items-center">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  className={`relative font-bold uppercase tracking-widest hover:text-gymGold transition-colors group text-sm ${navTextClass}`}
                  href={link.href}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-gymGold transition-all duration-300 group-hover:w-full group-hover:left-0" />
                </a>
              ))}
            </div>

            {/* CTA button */}
            <div className="hidden lg:block">
              <a
                className="bg-gymGold text-black px-6 rounded-full uppercase text-[10px] hover:bg-yellow-600 btn-transition shadow-lg block py-3 font-extrabold tracking-wide"
                href="#contact"
              >
                Join Now
              </a>
            </div>

            {/* Mobile hamburger */}
            <div className="lg:hidden">
              <button 
                className={`p-2 ${navTextClass}`}
                type="button"
                onClick={() => setIsOpen(!isOpen)}
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
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

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className={`fixed inset-x-0 bottom-0 top-[76px] md:top-[104px] z-40 backdrop-blur-lg lg:hidden ${mobileMenuBgClass}`}>
          <div className="flex flex-col items-center justify-start pt-10 space-y-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                className={`font-bold uppercase tracking-widest hover:text-gymGold transition-colors text-lg ${navTextClass}`}
                href={link.href}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              className="bg-gymGold text-black px-8 rounded-full uppercase text-sm hover:bg-yellow-600 btn-transition shadow-lg py-3 font-extrabold tracking-wide"
              href="#contact"
              onClick={() => setIsOpen(false)}
            >
              Join Now
            </a>
          </div>
        </div>
      )}
    </>
  );
}
