import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import GrowthStarterSprint from "@/components/sections/GrowthStarterSprint";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="bg-[#0A1225]">
      <Navbar />
      <Hero />
      <GrowthStarterSprint />
      <CTA />
      <Footer />


      <FloatingWhatsApp />
    </main>
  );
}