import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NgoList from "@/components/NgoList";

export default function Home() {
  return (
    <main className="px-6 sm:px-20 max-w-screen-2xl mx-auto">
      <Navbar />
      <Hero />
      <NgoList />
      <Footer />
    </main>
  );
}
