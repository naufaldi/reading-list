import type { ReactNode } from 'react';

import Footer from './Footer';
import Header from './Header';
import { Sidebar } from './Sidebar';
import { ThemeProvider } from '@/lib/styles/components/theme-provider';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="flex min-h-screen ">{children}</div>
    </ThemeProvider>
  );
};

export default Layout;
