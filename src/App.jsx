import About from "./components/About";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";
import Services from "./components/Services";

export default function App() {
  return (
    <main className="text-sm text-neutral-300 antialiased">
      
      <Navbar />
      <HeroSection />
      <About />
      <Projects />
      <Services/>
      <Testimonials />
      <Footer />
      
    </main>
  )
}