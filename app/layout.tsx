import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zeta-V",
  description: "The orchestration company in the new AI Era. As the new technology trends of AI, Mobile and social become ubiquitous in the enterprises, it is essential for enterprises to find a way to harness these technologies to multiply their business value. It partners with an ecosystem of NewAge technology companies to accelerate the realization of the business value for enterprises using Zeta Value Multiplier Framework (zVMF) and superior project management techniques of Theory of Constraints.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full overflow-x-hidden m-0 p-0 font-sans`}
      >
        <div className="relative flex min-h-screen flex-col">
          <NavBar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
