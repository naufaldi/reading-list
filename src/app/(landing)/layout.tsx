import React from 'react';
import MainFooter from '@/lib/components/main-layout/Footer';
import MainHeader from '@/lib/components/main-layout/Header';

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <MainHeader />
      {children}
      <MainFooter className="mx-auto flex items-center justify-center" />
    </>
  );
};

export default LandingLayout;
