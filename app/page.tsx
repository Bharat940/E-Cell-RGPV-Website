import Hero from "./components/Hero";
import OurVision from "./components/OurVision";
import I3 from "./components/I3";
import Initiatives from "./components/Initiatives";
import Adventures from "./components/Adventures";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <OurVision />
        <I3 />
        <Initiatives />
        <Adventures />
      </main>
    </>
  );
}
