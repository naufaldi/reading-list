'use client';

import Link from 'next/link';
import { Button, buttonVariants } from '@/lib/components/ui/button';
import { Icons } from '@/lib/components/ui/icons';

import { cn } from '@/lib/styles/utils';

// import { redirect, useRouter } from 'next/navigation';
import { Label } from '@/lib/components/ui/label';
import { Input } from '@/lib/components/ui/input';

import { createClient } from '@/lib/supabase/client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const supabase = createClient();
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      console.error('error', error.message);
      setErrorMessage('Invalid login credentials');
      // Optionally, handle error feedback (e.g., a toast notification)
    } else {
      // Redirect the user after successful login
      router.push('/dashboard');
      // console.log('data login', data);
    }
  };

  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: 'ghost' }),
          'absolute left-4 top-4 md:left-8 md:top-8'
        )}
      >
        <>
          <Icons.chevronLeft className="mr-2 h-4 w-4" />
          Back
        </>
      </Link>
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-2 text-center"
        >
          <Icons.logo className="mx-auto h-6 w-6" />
          <h1 className="text-2xl font-semibold tracking-tight">
            Welcome back
          </h1>
          <Label className="sr-only" htmlFor="email">
            Email
          </Label>
          <Input
            id="email"
            placeholder="name@example.com"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Label className="sr-only" htmlFor="password">
            Password
          </Label>
          <Input
            id="password"
            placeholder="Password here"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit"> Sign In</Button>
          {/* <SubmitButton
            formAction={signIn}
            className="bg-green-700 rounded-md px-4 py-2 text-foreground mb-2"
            pendingText="Signing In..."
          >
            Sign In
          </SubmitButton> */}
        </form>
        {errorMessage && <p>{errorMessage}</p>}
      </div>
      <p className="px-8 text-center text-sm text-muted-foreground">
        <Link
          href="/register"
          className="hover:text-brand underline underline-offset-4"
        >
          Don&apos;t have an account? Sign Up
        </Link>
      </p>
    </div>
  );
}
