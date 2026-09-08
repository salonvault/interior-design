import Navigation from "@/components/Navigation";
import Motion from "@/components/Motion";
import Hero1 from "@/components/Hero1";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import FeaturedProject from "@/components/FeaturedProject";
import Studio from "@/components/Studio";
import LiquidEffectAnimation from "@/components/LiquidEffectAnimation";
import MaterialStudy from "@/components/MaterialStudy";
import DesignFan from "@/components/DesignFan";
import Process from "@/components/Process";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <Motion>
      <Navigation />
      <main id="main-content">
        <Hero1 />
        <Hero />
        <Introduction />
        <FeaturedProject />
        <Studio />
        <LiquidEffectAnimation />
        <MaterialStudy />
        {/* <SelectedWork /> */}
        <DesignFan />
        <Process />
        <Contact />
      </main>
    </Motion>
  );
}
