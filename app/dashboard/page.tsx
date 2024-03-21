import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';
import { Button } from '@/components/ui/button';

export default async function PrivatePage() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  (error || !data?.user) && redirect('/login');

  // const { data: users } = await supabase.from('users').select();
  const { data: profile } = await supabase
    .from('users')
    .select()
    .eq('email', data?.user?.email);

  (!profile || profile.length === 0) && redirect('/onboarding');

  return (
    <div>
      <section className="h-screen flex items-center justify-center">
        {/* todo: signout functionality */}
        <Button
          className="absolute left-4 top-4 md:left-8 md:top-8"
          variant="outline"
        >
          SignOut
        </Button>

        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
            <div className="lg:col-span-3">
              <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl lg:text-4xl dark:text-white">
                👋 Welcome back {data.user?.email}
              </h1>
              <p className="mt-3 text-xl font-semibold font-mono text-rose-600">
                ---- protected route ----
              </p>
              <p>{JSON.stringify(profile, null, 2)}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
