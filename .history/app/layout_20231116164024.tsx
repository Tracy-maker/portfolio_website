import Header from "@/components/header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Provider } from "@/components/provider";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Leslsy's_Chu | Portfolio",
  description: "Leslsy's_Chu is an Senior Financial Planning Analyst ",
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
          <Footer />
          <Toaster position="top-right" />
        </Provider>
      </body>
    </html>
  );
}
