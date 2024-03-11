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
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/lib/components/ui/form';
import { useForm } from 'react-hook-form';
import { formSchemaLogin } from '@/lib/schema/login';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

export default function LoginPage() {
  //supabase for client side component
  const supabase = createClient();
  const router = useRouter();
  /*
   * Reference : https://ui.shadcn.com/docs/components/form#example
   */
  const form = useForm<z.infer<typeof formSchemaLogin>>({
    resolver: zodResolver(formSchemaLogin),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values: z.infer<typeof formSchemaLogin>) => {
    values.preventDefault();
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      // you can use toast from shadcn too
      setErrorMessage(error.message);
    } else {
      // Redirect the user after successful login
      router.push('/dashboard');
    }
  };

  return (
    <section
      id="login"
      className="container flex h-screen w-screen flex-col items-center justify-center"
    >
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
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="flex flex-col space-y-4 text-left"
          >
            <h1 className="text-2xl font-semibold tracking-tight text-center">
              Welcome back
            </h1>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="naufaldi@gmail.com" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="asd123" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={loading}>
              {' '}
              Sign In
            </Button>
          </form>
        </Form>

        {errorMessage && <p className="text-red-500 my-4">{errorMessage}</p>}
      </div>
      <p className="px-8 text-center text-sm text-muted-foreground my-4">
        <Link
          href="/register"
          className="hover:text-brand underline underline-offset-4 "
        >
          Don&apos;t have an account? Sign Up
        </Link>
      </p>
    </section>
  );
}
