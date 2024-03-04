import { createClient } from '@/lib/supabase/server';

import { redirect } from 'next/navigation';
import { Button } from '../ui/button';

export default async function AuthButton() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const signOut = async () => {
    'use server';

    const supabase = createClient();
    await supabase.auth.signOut();
    return redirect('/login');
  };

  console.log('user', user);
  return (
    <div className="flex items-center gap-4">
      Hey, {user?.email}!
      <form action={signOut}>
        <Button variant="default">Logout</Button>
      </form>
    </div>
  );
}
