'use client';

import Approach from '@/components/Approach';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { ThemeProvider } from '@/components/ui/theme-provider';
import React, { useEffect } from 'react';

const UserDashboard = () => {
  // useEffect(() => {
  //   document.body.classList.add('dark');
  // }, []);

  const navItems = [
    { name: 'Home', link: '#home' },
    { name: 'Approach', link: '/approach' },
    { name: 'Contact', link: '/contact' },
  ];

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden w-full mx-auto sm:px-10 px-5">
      <div className="w-full overflow-hidden">
        <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
        <Hero />
        <Approach />
        <Footer />
        </ThemeProvider>
      </div>
    </main>
  );
};

export default UserDashboard;
