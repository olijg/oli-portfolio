import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/organisms/Navbar";
import ContactCard from "./components/molecules/ContactCard";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Oli Green's Portfolio",
  description: "A serious website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <head>
        </head>
          <body className={inter.className}>
              <header>
                  <Navbar />
              </header>
              {children}
              <footer>
                  <ContactCard />
              </footer>
          </body>
    </html>
  );
}
