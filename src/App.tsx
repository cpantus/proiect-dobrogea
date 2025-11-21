import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { Story } from './components/Story.tsx';
import { Gallery } from './components/Gallery.tsx';
import { Screenings } from './components/Screenings.tsx';
import { Shop } from './components/Shop.tsx';
import { Footer } from './components/Footer.tsx';

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
