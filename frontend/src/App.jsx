import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';

function App() {
  return (
    <div className="bg-black min-h-screen text-offWhite font-sans">
      <Navbar />
      <main className="pt-20">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}

export default App;
