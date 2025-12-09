import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import OurVision from "./components/OurVision";
import I3 from "./components/I3";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <OurVision />
        <I3 />
      </main>
    </>
  );
}
