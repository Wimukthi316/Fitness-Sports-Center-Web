import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Memberships from './components/sections/Memberships';
import Trainers from './components/sections/Trainers';
import Contact from './components/sections/Contact';
import ThemeToggle from './components/common/ThemeToggle';

function App() {
  return (
    <div className="bg-black min-h-screen text-offWhite font-sans overflow-x-hidden">
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <About />
        <Services />
        <Memberships />
        <Trainers />
        <Contact />
      </main>
      <Footer />
      <ThemeToggle />
    </div>
  );
}

export default App;
