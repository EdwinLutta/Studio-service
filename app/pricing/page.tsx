import Contact from "@/components/contact";
import FAQSection from "@/components/faqSection";
import PricingSection from "@/components/pricingSection";

export default function page() {
  return (
    <main className="flex flex-col items-center px-4">
      <PricingSection />
      <FAQSection />
    </main>
  );
}
