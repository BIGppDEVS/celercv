import FAQSection from '@/components/faq';
import FeatureGrid from '@/components/feature-grid';
import Footer from '@/components/footer';
import HeroSection from '@/components/hero';
import Navbar from '@/components/navbar';
import OnboardingSection from '@/components/onboarding';
import ShowcaseSection from '@/components/showcase';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between m-8 border">
      <Navbar />
      <HeroSection />
      <FeatureGrid />
      <OnboardingSection />
      <ShowcaseSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
