import { Navbar } from '@/components/sections/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Features } from '@/components/sections/Features';
import { Pipeline } from '@/components/sections/Pipeline';
import { Demo } from '@/components/sections/Demo';
import { Video } from '@/components/sections/Video';
import { TechStack } from '@/components/sections/TechStack';
import { Stats } from '@/components/sections/Stats';
import { CTA } from '@/components/sections/CTA';
import { Footer } from '@/components/sections/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Pipeline />
      <Demo />
      <Video />
      <TechStack />
      <Stats />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
