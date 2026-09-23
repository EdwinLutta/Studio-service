import AboutSection from "@/components/aboutSection";
import Contact from "@/components/contact";


export default function page() {
  return (
    <main className="flex flex-col items-center px-4">
      <AboutSection />
      <Contact />
    </main>
  );
}
