import { cn } from '@/lib/styles/utils';
import Link from 'next/link';
import React from 'react';
import { buttonVariants } from '../ui/button';

const MainHeader = () => {
  return (
    <header className="container z-40 bg-background">
      <div className="flex h-20 items-center justify-between py-6">
        <nav className="w-full flex justify-between items-center">
          <Link href="/">
            <h1 className="text-lg text-black dark:text-white font-bold">
              Reading List App
            </h1>
          </Link>
          <Link
            href="/login"
            className={cn(
              buttonVariants({ variant: 'secondary', size: 'sm' }),
              'px-4'
            )}
          >
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default MainHeader;
