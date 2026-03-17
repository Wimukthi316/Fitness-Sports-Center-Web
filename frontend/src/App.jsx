import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';

function App() {
  return (
    <div className="bg-black min-h-screen text-offWhite font-sans">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
