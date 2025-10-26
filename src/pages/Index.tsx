import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection"; // Importa il nuovo componente
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <SkillsSection /> {/* Includi la nuova sezione qui */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;