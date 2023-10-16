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
        className={`${inter.className} bg-gray-50 text-gray-950 relative h-[5000px] pt-28 sm:pt-36 dark:bg-[#090908] dark:text-white  selection:bg-gray-500 dark:selection:bg-gray-800`}
      >
        <Provider>
          <Header />
          {children}
          <Toaster position="top-right" title="
        </Provider>
      </body>
    </html>
  );
}
