import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar/Navbar";
import { Footer } from "@/components/shared/Footer/Footer";
import NextAuthProviders from "@/providers/NextAuthProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "EasyHouse",
    template: "%s | EasyHouse",
  },
  description: "Find, buy, and rent properties easily with EasyHouse.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NextAuthProviders>
          <header>
            <Navbar />
          </header>
          <main className="min-h-screen">{children}</main>
          <Footer />
        </NextAuthProviders>
      </body>
    </html>
  );
}
