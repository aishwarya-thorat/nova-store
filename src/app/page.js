import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Brands from "@/components/Brands";
import Featured from "@/components/Featured";
import WhyChoose from "@/components/WhyChoose";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <> 
      <Navbar />
      <Hero />
      <Brands />
      <Featured />
      <WhyChoose />
      <Footer />
    </>


    
  );
}