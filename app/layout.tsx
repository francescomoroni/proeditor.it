import "./globals.css"
import { Inter } from "next/font/google"
import { TopBar } from "@/components/layout/top-bar";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ThemeProvider } from "@/components/theme-provider"


const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Casa Editrice 3.0",
  description: "La prima casa editrice 3.0 in Italia",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" suppressHydrationWarning>
       <TopBar />
       <Navbar />
      <body className={inter.className}>
        <ThemeProvider
          defaultTheme="system"
        >
          {children}
        </ThemeProvider>
      </body>
      <Footer />
    </html>
  )
}
