import Header from "./components/layouts/Header";
import About from "./components/layouts/About";
import Works from "./components/layouts/Works";
import Skills from "./components/layouts/Skills";
import Contact from "./components/layouts/Contact";
import Hero from "./components/layouts/Hero";
import { Separator } from "@/components/ui/separator";
import Footer from "./components/layouts/Footer";
import { TypewriterEffect } from "./components/ui/typewriter-effect";


export default function Home() {
  return (
    <>
    <Header />
    <Separator />
    <main>
      <Hero />
      <About />
      <Works />
      <Skills />
      <Contact />
      <Footer />
    </main>
    </>

  );
}
