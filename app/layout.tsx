import "./globals.css"
import { Inter } from "next/font/google"
import { TopBar } from "@/components/layout/top-bar";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";


const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Pro Editors",
  description: "La prima casa editrice 3.0 in Italia",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" suppressHydrationWarning>
      <body className={inter.className}>
       <TopBar />
       <Navbar />
          {children}
      <Footer />
      </body>
    </html>
  )
}
