'use client';

import { usePathname } from 'next/navigation';
import { TopBar } from "@/components/layout/topbar";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { TopBarWebDesign } from '@/components/layout/topbar-web';
import { FooterWebDesign } from '@/components/layout/footer-web';
import { NavbarWebDesign } from '@/components/layout/navbar-web';

export default function ClientLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname(); // Access the current pathname
  const isWebDesignPage = pathname === '/web-design';
  console.log('pathname', pathname);

  return (
    <>
      {!isWebDesignPage && <TopBar />}
      {isWebDesignPage && <TopBarWebDesign />}
      {!isWebDesignPage && <Navbar />}
      {isWebDesignPage && <NavbarWebDesign />}
      {children}
      {!isWebDesignPage && <Footer />}
      {isWebDesignPage && <FooterWebDesign />}
    </>
  );
}
