import Footer from '@/lib/components/layout/Footer';
import Header from '@/lib/components/layout/Header';
import { Sidebar } from '@/lib/components/layout/Sidebar';
import React from 'react';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Sidebar />
      <div className="flex w-full flex-col p-4">
        <Header />
        <main className="wrapper flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default DashboardLayout;
