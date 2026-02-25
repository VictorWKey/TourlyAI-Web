import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { Demo } from './components/Demo';
import { Gallery } from './components/Gallery';
import { WhyTourlyAI } from './components/WhyTourlyAI';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-surface-950 text-surface-900 dark:text-surface-100 font-sans">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Demo />
      <Gallery />
      <WhyTourlyAI />
      <CTA />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
