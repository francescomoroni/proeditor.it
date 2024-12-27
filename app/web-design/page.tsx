import { Hero } from "@/components/web-design/Hero";

import { Benefits } from "@/components/web-design/Benefits";
import { Pricing } from "@/components/web-design/Pricing";
import { HowItWorks } from "@/components/web-design/HowItWorks";
import { Testimonials } from "@/components/web-design/Testimonials";
import { Empathy } from "@/components/web-design/Empathy";
import { ContactFormWebDesign } from "@/components/web-design/ContactForm";
import { WhyItWorks } from "@/components/web-design/WhyItWorks";

export default function WebDesignerPage() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Empathy />
      <Benefits />
      <Pricing />
      <WhyItWorks />
      <Testimonials />
      <HowItWorks />
      <ContactFormWebDesign />
    </div>
  );
};

