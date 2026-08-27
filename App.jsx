import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function App() {
  return (
    <div className="font-body">
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Pricing />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
