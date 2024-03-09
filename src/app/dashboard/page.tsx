import { Button } from '@/lib/components/ui/button';
import Dashboard from '@/lib/pages/dashboard';
import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import React from 'react';

export default async function DashboardPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  // if(role !== '')
  if (!user) {
    return redirect('/login');
  }

  return (
    <div>
      <h1 className="text-lg">Dashboard</h1>
      <Dashboard />
    </div>
  );
}
