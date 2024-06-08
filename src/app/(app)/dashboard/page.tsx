'use client';

import Approach from '@/components/Approach';
// import Clients from '@/components/Clients';
// import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
// import Grid from '@/components/Grid';
import Hero from '@/components/Hero';
// import RecentProjects from '@/components/RecentProjects';
// import { FloatingNav } from '@/components/ui/FloatingNavbarUi';
import { FloatingNav } from '@/components/FloatingNavbar';
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
        {/* <FloatingNav :  /> */}
        <Hero />
        {/* <Grid /> */}
        {/* <RecentProjects /> */}
        {/* <Clients /> */}
        {/* <Experience /> */}
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default UserDashboard;
