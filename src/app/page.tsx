import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NgoList from "@/components/NgoList";

export default function Home() {
  return (
    <main className="sm:px-20 w-10/12 mx-auto">
      <Navbar />
      <Hero />
      {/* <NgoList />
      <Footer /> */}
    </main>
  );
}
