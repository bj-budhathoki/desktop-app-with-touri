import { Header } from "@/containers/layouts/header";
import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Footer } from "@/containers/layouts/footer";
import { Sidebar } from "@/containers/layouts/sidebar";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "music app",
  description: "Generated by create next app and tauri",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} dark bg-[#F1F6F9]`}>
        {children}
      </body>
    </html>
  );
}
