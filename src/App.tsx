import { Navbar } from '@/components/sections/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Features } from '@/components/sections/Features';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Demo } from '@/components/sections/Demo';
import { Gallery } from '@/components/sections/Gallery';
import { CTA } from '@/components/sections/CTA';
import { Footer } from '@/components/sections/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Demo />
        <Gallery />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
