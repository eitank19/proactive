import Facilities from './components/Facilities';
import Goals from './components/Goals';
import Hero from './components/Hero';
import Plans from './components/Plans';
import Professionals from './components/Professionals';

export default function Home() {
  return (
    <main>
      <Hero />
      <Goals />
      <Facilities />
      <Professionals />
      <Plans />
    </main>
  );
}
