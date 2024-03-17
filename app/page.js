import About from './components/About';
import Classes from './components/Classes';
import Facilities from './components/Facilities';
import Footer from './components/Footer';
import Goals from './components/Goals';
import Hero from './components/Hero';
import NavSocials from './components/NavSocials';
import Plans from './components/Plans';
import Professionals from './components/Professionals';
import Supplements from './components/Supplements';

export default function Home() {
  return (
    <main>
      <Hero />
      <Goals />
      <Facilities />
      <Professionals />
      <Plans />
      <Classes />
      <About />
      <Supplements />
      <NavSocials />
      <Footer />
    </main>
  );
}
