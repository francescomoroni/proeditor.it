import { Hero } from "@/components/web-design/Hero";

import { Benefits } from "@/components/web-design/Benefits";
import { Pricing } from "@/components/web-design/Pricing";
import { HowItWorks } from "@/components/web-design/HowItWorks";
import { Testimonials } from "@/components/web-design/Testimonials";
import { Empathy } from "@/components/web-design/Empathy";
import { ContactFormWebDesign } from "@/components/web-design/ContactForm";
import { WhyItWorks } from "@/components/web-design/WhyItWorks";
import Head from "next/head";

export default function WebDesignerPage() {
  const metadata = {
    title: "Web Design | Pro Editors",
    description:
      "Sviluppo siti web professionali per piccole attività, liberi professionisti e imprenditori come te. Porta la tua attività online con un sito web professionale a soli €29.90 al mese.",
  };
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {/* Aggiungi altri meta tag SEO se necessario */}
      </Head>
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
    </>
  );
}
