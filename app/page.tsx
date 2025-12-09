import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import OurVision from "./components/OurVision";
import I3 from "./components/I3";
import Initiatives from "./components/Initiatives";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <OurVision />
        <I3 />
        <Initiatives />
      </main>
    </>
  );
}
