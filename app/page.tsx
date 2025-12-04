import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import OurVision from "./components/OurVision";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <OurVision />
      </main>
    </>
  );
}
