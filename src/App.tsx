import './i18n';
import { useTheme } from './hooks/useTheme';
import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import HowItWorks from './components/sections/HowItWorks';
import Privacy from './components/sections/Privacy';
import VideoSection from './components/sections/VideoSection';
import Gallery from './components/sections/Gallery';
import FAQ from './components/sections/FAQ';
import CTA from './components/sections/CTA';
import Footer from './components/sections/Footer';

export type Theme = 'light' | 'dark';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-white dark:bg-surface-950 text-surface-900 dark:text-surface-50 transition-colors duration-300">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero theme={theme} />
      <Features />
      <HowItWorks />
      <Gallery />
      <VideoSection />
      <Privacy />
      <FAQ />
      <CTA />
      <Footer theme={theme} />
    </div>
  );
}

export default App;
