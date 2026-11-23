import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemsSection from "@/components/ProblemsSection";
import Services from "@/components/Services";
import ClinicFeatures from "@/components/ClinicFeatures";
import BeforeAfterGallery from "@/components/BeforeAfterGallery";
import Testimonials from "@/components/Testimonials";
import FaqSection from "@/components/FaqSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-primary selection:text-white">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ProblemsSection />
        <Services />
        <ClinicFeatures />
        <BeforeAfterGallery />
        <Testimonials />
        <FaqSection />
        <LocationSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;