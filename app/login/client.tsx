'use client';

import Link from 'next/link';

import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { Icons } from '@/components/icons';

import { UserAuthForm } from '@/components/user-auth-form';
import { useEffect, useState } from 'react';
import {
  User,
  createClientComponentClient
} from '@supabase/auth-helpers-nextjs';
import { redirect } from 'next/navigation';

export default function LoginClient() {
  const [user, setUser] = useState<User | null>(null);
  const [authenticating, setAuthenticating] = useState(true);

  useEffect(() => {
    if (user) {
      redirect('/dashboard');
    }
  }, [user]);

  const supabase = createClientComponentClient();

  useEffect(() => {
    async function fetchUser() {
      const {
        data: { user }
      } = await supabase.auth.getUser();
      setAuthenticating(false);
      setUser(user);
    }
    fetchUser();
  }, []);

  if (user && !authenticating) {
    redirect('/dashboard');
  }

  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: 'ghost' }),
          'absolute left-4 top-4 md:left-8 md:top-8'
        )}
      >
        <Icons.chevronLeft className="mr-2 h-4 w-4" />
        Back
      </Link>
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <Icons.logo className="mx-auto h-6 w-6" />
          <h1 className="text-2xl font-semibold tracking-tight">
            Welcome back
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter your email to sign in to your account
          </p>
        </div>
        <UserAuthForm />
        {/* <p className="px-8 text-center text-sm text-muted-foreground">
          <Link
            href="/register"
            className="hover:text-brand underline underline-offset-4"
          >
            Don&apos;t have an account? Sign Up
          </Link>
        </p> */}
      </div>
    </div>
  );
}
