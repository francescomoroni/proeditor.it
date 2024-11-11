"use client";

import Cookies from "@/components/cookies";
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
import { useEffect } from "react";
import { useState } from "react";
import { Portfolio } from "@/components/sections/portfolio";
import { AnnouncementBar2 } from "@/components/sections/announcement-bar2";

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
      <Servizi0 />
      <Servizi1 />
      <Servizi2 />
      <Servizi3 />
      <Servizi4 />
      <Servizi5 />
      <Portfolio />
      <Statement />
      <ContactForm />
    </div>
  );
}
