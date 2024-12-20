"use client";

import Cookies from "@/components/cookies";
import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { Hero } from "@/components/sections/hero";
import { Numbers } from "@/components/sections/numbers";
import { ContactForm } from "@/components/sections/contact-form";
import { useEffect } from "react";
import { useState } from "react";
import { Portfolio } from "@/components/sections/portfolio";
import { AnnouncementBar2 } from "@/components/sections/announcement-bar2";
import { AnnouncementBar3 } from "@/components/sections/announcement-bar3";
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
      <Services />
      <Portfolio />
      <AnnouncementBar3 />
      <ContactForm />
    </div>
  );
}
