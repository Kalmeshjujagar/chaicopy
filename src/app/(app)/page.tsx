"use client";

import Hero from "@/components/Hero";
// import Grid from "@/components/Grid";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
// import Clients from "@/components/Clients";
// import Experience from "@/components/Experience";
// import RecentProjects from "@/components/RecentProjects";
import { useEffect } from "react";
import { ThemeProvider } from "@/components/ui/theme-provider";
export default function Home() {

  // useEffect(() => {
  //   document.body.classList.add("dark");
  // }, []);

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <ThemeProvider>
        <Hero />
        {/* <Grid /> */}
        {/* <RecentProjects />
        <Clients />
        <Experience /> */}
        <Approach />
        <Footer />
        </ThemeProvider>
      </div>
    </main>
  );
}
