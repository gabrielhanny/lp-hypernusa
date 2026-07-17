import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import NusaHelps from "@/components/sections/NusaHelps";
import GrowthStarterSprint from "@/components/sections/GrowthStarterSprint";
import HowItWorks from "@/components/sections/HowItWorks";
import IdealFor from "@/components/sections/IdealFor";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="bg-[#0A1225]">
      <Navbar />
      <Hero />
      <NusaHelps />
      <GrowthStarterSprint />
      <HowItWorks />
      <IdealFor />
      <CTA />
      <Footer />
    </main>
  );
}