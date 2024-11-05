"use client";

import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { Hero } from "@/components/sections/hero";
import { ContactForm } from "@/components/sections/contact-form";

export default function Home() {
  return (
    <div>
      <AnnouncementBar />
      <Hero />
      <ContactForm />
    </div>
  );
}
