import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/Components/Header/page";
import './globals.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <div className="wrappers">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}