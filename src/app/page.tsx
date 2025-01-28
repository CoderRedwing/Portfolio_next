import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import TechPeCharcha from "@/components/TechPeCharcha";
import WhySelectMe from "@/components/WhySelectMe";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]"> 
      
      <HeroSection />
      <Blog />
      <WhySelectMe />
      <TechPeCharcha />
      <Footer/>
    </main>
  );
}
