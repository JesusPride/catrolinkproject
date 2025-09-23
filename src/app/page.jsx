import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import Features from "@/app/components/Features";
import Footer from "@/app/components/Footer";
import { ToggleProvider } from "@/app/components/ToggleTheme";

function page() {
  return (
    <>
      <ToggleProvider>
        <Header />
      </ToggleProvider>
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </>
  );
}

export default page;
