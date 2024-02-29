'use client';

import React, { useState } from 'react';

import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from '@/components/ui/use-toast';
import { Icons } from '@/components/icons';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isGitHubLoading, setIsGitHubLoading] = useState<boolean>(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const supabase = createClientComponentClient();

  const handleSignUp = async () => {
    await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`
      }
    });
    router.refresh();
    window.location.reload(); // makeshift: should not be here, router.refresh ideally should work
  };

  const handleSignIn = async () => {
    const data = await supabase.auth.signInWithPassword({
      email,
      password
    });

    // todo: handle gracefully
    !data.data.user &&
      toast({
        title: 'Something went wrong.',
        description: 'Your sign in request failed. Please try again.',
        variant: 'destructive'
      });

    router.refresh();
    window.location.reload(); // makeshift: should not be here, router.refresh ideally should work
  };

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="grid gap-2">
          <div className="grid gap-1 mb-4">
            <Label
              className="text-xs text-slate-700 dark:text-slate-200"
              htmlFor="email"
            >
              Email
            </Label>
            <Input
              id="email"
              placeholder="bruno@united.uk"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading || isGitHubLoading}
              className="mb-2"
            />
            <Label
              className="text-xs text-slate-700 dark:text-slate-200"
              htmlFor="passsword"
            >
              Password
            </Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading || isGitHubLoading}
            />
            {/* <p className="px-1 text-xs text-red-600">
                Something went wrong. Please try again.
              </p> */}
          </div>
          <button
            onClick={handleSignIn}
            className={cn(buttonVariants())}
            disabled={isLoading}
          >
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign In with Email
          </button>
          <button
            onClick={handleSignUp}
            className={cn(buttonVariants({ variant: 'secondary' }))}
            disabled={isLoading}
          >
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign Up with Email
          </button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <button
        type="button"
        className={cn(buttonVariants({ variant: 'outline' }))}
        onClick={() => {
          setIsGitHubLoading(true);
          alert('implementation pending!!');
        }}
        disabled={isLoading || isGitHubLoading}
      >
        {isGitHubLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.chrome className="mr-2 h-4 w-4" />
        )}{' '}
        Google
      </button>
    </div>
  );
}
