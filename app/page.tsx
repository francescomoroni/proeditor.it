"use client";

import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { Hero } from "@/components/sections/hero";
import { Numbers } from "@/components/sections/numbers";
import { Servizi0 } from "@/components/sections/servizi-0";
import { Servizi1 } from "@/components/sections/servizi-1";
import { Servizi2 } from "@/components/sections/servizi-2";
import { Servizi3 } from "@/components/sections/servizi-3";
import { Servizi4 } from "@/components/sections/servizi-4";
import { Servizi5 } from "@/components/sections/servizi-5";
import { Statement } from "@/components/sections/statement";
import { ContactForm } from "@/components/sections/contact-form";

export default function Home() {
  return (
    <div>
      <AnnouncementBar />
      <Hero />
      <Numbers />
      <Servizi0 />
      <Servizi1 />
      <Servizi2 />
      <Servizi3 />
      <Servizi4 />
      <Servizi5 />
      <Statement />
      <ContactForm />
    </div>
  );
}
