'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Button } from '../ui/button';
import { cn } from '@/lib/styles/utils';

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className={cn('w-full max-w-xs border-r pb-12')}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          
          <div className="space-y-1">

            <Button
              variant={pathname === '/dashboard' ? 'secondary' : 'ghost'}
              className="w-full justify-start"
              asChild
            >
              <Link href="/dashboard">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-4 w-4"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polygon points="10 8 16 12 10 16 10 8" />
                </svg>
                Home
              </Link>
            </Button>

            {/* <Link href="/geojson">
              <Button
                variant={pathname === '/geojson' ? 'secondary' : 'ghost'}
                className="w-full justify-start"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-4 w-4"
                >
                  <rect width="7" height="7" x="3" y="3" rx="1" />
                  <rect width="7" height="7" x="14" y="3" rx="1" />
                  <rect width="7" height="7" x="14" y="14" rx="1" />
                  <rect width="7" height="7" x="3" y="14" rx="1" />
                </svg>
                Create Book
              </Button>
            </Link> */}

          </div>
        </div>
      </div>
    </aside>
  );
}
