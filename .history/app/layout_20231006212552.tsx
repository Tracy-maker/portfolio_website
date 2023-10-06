import Header from "@/components/header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yingxin_Zhang | Portfolio",
  description: "Yingxin_Zhang is a front-end developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative h-[5000px] pt-28 sm:pt-36`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[21rem] h-[156.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-45rem] h-[71.25rem] w-[-30rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        <div className="bg-[	#E6E6FA] absolute top-[-241rem] -z-10 left-[-145rem] h-[100.25rem] w-[-60rem] rounded-full blur-[10rem] sm:w-[168.75rem] md:left-[-63rem] lg:left-[-98rem] xl:left-[-95rem] 2xl:left-[-95rem]"></div>
        <Header />
        {children}
      </body>
    </html>
  );
}
