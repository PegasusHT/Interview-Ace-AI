import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/_components/Footer/Footer";
import BottomMenu from "@/_components/BottomMenu/BottomMenu";
import { NextAuthProvider } from "./provider";
import SessionProvider  from "./SessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "InterviewAce-AI",
  description: "Master your interview with AI driven practice",
};

export default function RootLayout({
  children, session
}: Readonly<{
  children: React.ReactNode;
  session: any
}>) {
  return (
    <html lang="en">
        <NextAuthProvider session={session}>
          <body className={inter.className}>
            <SessionProvider>
              <main className="font-sans overflow-x-hidden">
                {children}
                <BottomMenu />
                <Footer />
              </main>
            </SessionProvider>
          </body>
        </NextAuthProvider>
    </html>
  );
}
