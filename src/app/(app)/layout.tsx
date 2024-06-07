import { FloatingNav } from '@/components/FloatingNavbar';
import { Toaster } from '@/components/ui/toaster';
import AuthProvider from '@/context/AuthProvider';

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  // const { data: session } = useSession();
  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Portfolio", link: "/portfolio" },
    { name: "Resume", link: "/resume" },
  ];


  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <time dateTime="2016-10-25" suppressHydrationWarning />
      <AuthProvider>
        <body className=" bg-black-100">
          <FloatingNav navItems={navItems} />
          {children}
          <Toaster />
        </body>
      </AuthProvider>
    </html>
  );
}
