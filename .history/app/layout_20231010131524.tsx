import Header from "@/components/header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Provider } from "@/components/provider";

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
        className={`${inter.className} bg-blue-50 text-black dark:bg-[#090908] dark:text-white h-full selection:bg-gray-500 dark:selection:bg-gray-800`}
      >
        <Provider>
        
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  );
}
