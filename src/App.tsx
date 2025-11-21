import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Story } from './components/Story';
import { Gallery } from './components/Gallery';
import { Screenings } from './components/Screenings';
import { Shop } from './components/Shop';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-200 font-sans antialiased selection:bg-orange-600 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Story />
        <Gallery />
        <Screenings />
        <Shop />
      </main>
      <Footer />
    </div>
  );
}

export default App;
