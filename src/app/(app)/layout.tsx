import { FloatingNav } from '@/components/FloatingNavbar';
import { ThemeProvider } from '@/components/ui/theme-provider';
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
      <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
      <AuthProvider>
        <body className=" bg-black-100">
          <FloatingNav navItems={navItems} />
          {children}
          <Toaster />
        </body>
      </AuthProvider>
      </ThemeProvider>
    </html>
  );
}
