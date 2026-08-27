import { Navbar } from "@/components/home/Navbar";
import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { Features } from "@/components/home/Features";
import { Faq } from "@/components/home/Faq";
import { Footer } from "@/components/home/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-white text-[#0c120f]">
        <Hero />
        <TrustBar />
        <Features />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
