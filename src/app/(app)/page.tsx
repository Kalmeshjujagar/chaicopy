"use client";

import Hero from "@/components/Hero";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { ThemeProvider } from "@/components/ui/theme-provider";


export default function Home() {
  // useEffect(() => {
  //   document.body.classList.add("dark");
  // }, []);

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange >
        <div className="max-w-7xl w-full">
          <Hero />
          <Approach />
          <Footer />
        </div>
      </ThemeProvider>
    </main>
  );
}
