"use client";

import Cookies from "@/components/cookies";
import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { Hero } from "@/components/sections/hero";
import { Numbers } from "@/components/sections/numbers";
import { Statement } from "@/components/sections/statement";
import { ContactForm } from "@/components/sections/contact-form";
import { useEffect } from "react";
import { useState } from "react";
import { Portfolio } from "@/components/sections/portfolio";
import { AnnouncementBar2 } from "@/components/sections/announcement-bar2";
import Services from "@/components/sections/services";
export default function Home() {
  const [cookiesOpen, setCookiesOpen] = useState(false);

  useEffect(() => {
    const item = localStorage.getItem("cookies");
    if (!item) {
      setCookiesOpen(true);
    }
  }, []);
  return (
    <div>
      <Cookies open={cookiesOpen} setOpen={setCookiesOpen} />
      <AnnouncementBar />
      <Hero />
      <Numbers />
      <AnnouncementBar2 />
      {/* <Servizi0 />
      <Servizi1 />
      <Servizi2 />
      <Servizi3 />
      <Servizi4 />
      <Servizi5 /> */}
      <Services />
      <Portfolio />
      <Statement />
      <ContactForm />
    </div>
  );
}
