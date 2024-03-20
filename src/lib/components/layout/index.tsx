import type { ReactNode } from 'react';

import Footer from './Footer';
import Header from './Header';
import { Sidebar } from './Sidebar';
import { ThemeProvider } from '@/lib/styles/components/theme-provider';
import Link from 'next/link';
import { cn } from '@/lib/styles/utils';
import { buttonVariants } from '../ui/button';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="flex flex-col min-h-screen ">{children}</div>
    </ThemeProvider>
  );
};

export default Layout;
