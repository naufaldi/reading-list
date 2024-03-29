import Footer from '@/lib/components/layout/Footer';
import Header from '@/lib/components/layout/Header';
import { Sidebar } from '@/lib/components/layout/Sidebar';
import { createClient } from '@/lib/supabase/server';
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Dashboard Reading List',
  description: 'Dashboard reading list nextjs 14',
};

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <> 
    <Header />
    <div className='flex w-full min-h-full'>
      <Sidebar />
      <div className="flex w-full flex-col p-4">
        <main className="wrapper flex-grow">{children}</main>
        <Footer />
      </div>
    </div>
    </>
  );
};

export default DashboardLayout;
