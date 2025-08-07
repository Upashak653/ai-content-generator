import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact"
import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <div>
      <>
      <Header/>
      <Hero />
      <Features />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Contact/>
      <Footer/></>
    </div>
  );
}
