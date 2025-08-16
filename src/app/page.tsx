import type { Metadata } from "next";
import "./globals.css";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";

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

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
