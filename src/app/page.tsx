import Navbar from "@/components/Navbar";
import HeroGrid from "@/components/HeroGrid";
import FeatureCards from "@/components/FeatureCards";
import Services from "@/components/Services/Services";
import AboutSection from "@/components/AboutSection";
import Gallery from "@/components/Gallery";
import PricingSection from "@/components/PricingSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main className="relative min-h-screen w-full">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-rose-100 via-fuchsia-50 to-purple-100" />

      <div className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 sm:py-6 lg:px-10 lg:py-8">
        <div className="overflow-hidden rounded-[2.5rem] bg-white/60 shadow-2xl shadow-rose-100/50 backdrop-blur-xl">
          <div className="bg-white/40 px-4 pb-6 sm:px-6 sm:pb-8 lg:px-10 lg:pb-10">
            <Navbar />

            <div className="mt-6">
              <HeroGrid />
            </div>

            <div className="mt-6">
              <FeatureCards />
            </div>

            <div className="mt-6">
              <Services />
              <AboutSection/>
              <Gallery />
              <PricingSection />
              <Contact />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
