'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import {
  User,
  createClientComponentClient
} from '@supabase/auth-helpers-nextjs';

import { redirect } from 'next/navigation';
import { Button } from '@/components/ui/button';

const Dashboard = () => {
  const [user, setUser] = useState<User | null>(null);
  const [authenticating, setAuthenticating] = useState(true);

  const router = useRouter();
  const supabase = createClientComponentClient();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
    window.location.reload(); // makeshift: should not be here, router.refresh ideally should work
  };

  useEffect(() => {
    async function fetchUser() {
      const {
        data: { user }
      } = await supabase.auth.getUser();
      setUser(user);
      setAuthenticating(false);
    }
    fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!user && !authenticating) {
    redirect('/login');
  }

  return (
    <section className="h-screen flex items-center justify-center">
      <Button
        className="absolute left-4 top-4 md:left-8 md:top-8"
        variant="outline"
        onClick={handleSignOut}
      >
        SignOut
      </Button>

      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
          <div className="lg:col-span-3">
            <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl lg:text-4xl dark:text-white">
              👋 Welcome back {user?.email}
            </h1>
            <p className="mt-3 text-xl font-semibold font-mono text-rose-600">
              ---- protected route ----
            </p>
          </div>

          <div className="lg:col-span-4 mt-10 lg:mt-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="w-full rounded-xl"
              src="https://images.unsplash.com/photo-1708312606974-2eaeb24c965f?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Image Description"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
