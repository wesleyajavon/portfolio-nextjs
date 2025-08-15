import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wesley - Software Engineer Portfolio",
  description: "Entry-level software engineer seeking opportunities in frontend, backend, or full-stack development. Passionate about building innovative web applications with React, Next.js, and Node.js.",
  keywords: ["software engineer", "frontend developer", "backend developer", "full-stack developer", "React", "Next.js", "Node.js", "entry-level", "internship", "junior developer"],
  authors: [{ name: "Wesley" }],
  creator: "Wesley",
  publisher: "Wesley",
  openGraph: {
    title: "Wesley - Software Engineer Portfolio",
    description: "Entry-level software engineer seeking opportunities in frontend, backend, or full-stack development.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wesley - Software Engineer Portfolio",
    description: "Entry-level software engineer seeking opportunities in frontend, backend, or full-stack development.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
