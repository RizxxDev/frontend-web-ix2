import HeroSection from '../components/HeroSection';
import BentoGrid from '../components/BentoGrid';

export default function Home() {
  return (
    <main className="flex-grow max-w-container-max mx-auto w-full px-4 md:px-xl py-xl flex flex-col gap-xl relative">
      <HeroSection />
      <BentoGrid />
    </main>
  );
}
