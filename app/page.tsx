import Aboutme from "@/components/Aboutme";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <Aboutme />
      <Projects />
      <Contact />
      {/* temporary div */}
      {/* <div className="h-[3000px]"></div> */}
    </main>
  );
}
