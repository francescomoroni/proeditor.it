import "./globals.css"; 
import ClientLayoutWrapper from "@/app/client-layout-wrapper"

export const metadata = {
  title: "Pro Editors",
  description: "La prima casa editrice 3.0 in Italia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" suppressHydrationWarning>
      <body>
        <ClientLayoutWrapper>
          {children}
        </ClientLayoutWrapper>
      </body>
    </html>
  );
}
