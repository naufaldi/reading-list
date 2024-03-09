import Link from 'next/link';
import React from 'react';

const HomePages = () => {
  return (
    <div>
      <h1>App Router</h1>
      <Link href="/about">About</Link>
    </div>
  );
};

export default HomePages;
