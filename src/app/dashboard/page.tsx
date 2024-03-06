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
  // function addComment(comment) {
  //   // For demonstration purposes to show Error Boundary
  //   if (comment == null) {
  //     throw new Error(
  //       'Example Error: An error thrown to trigger error boundary'
  //     );
  //   }
  // }

  return (
    <div>
      {/* <Button onClick={() => addComment()}> on Error Trigger </Button> */}
      <Dashboard />
    </div>
  );
}
