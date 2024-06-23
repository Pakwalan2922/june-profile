import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
// Components
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "June Profile",
  description: "Created by NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#121212]">
      <body className={`${poppins.variable} w-full max-w-[1920px] mx-auto`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
