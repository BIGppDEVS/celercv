import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';
import IconQuotes from '@/components/icons/svg/quotes';
import OnboardingForm from '@/components/onboarding-form';

export default async function PrivatePage() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  (error || !data?.user) && redirect('/login');

  const { data: profile } = await supabase
    .from('users')
    .select()
    .eq('email', data?.user?.email);

  profile && profile.length && redirect('/dashboard');

  return (
    <div className="h-screen flex items-center">
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid items-center md:grid-cols-2 gap-8">
          <div>
            <p className="inline-block text-sm font-medium bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400">
              lorem ipsum dolor sit
            </p>

            <div className="mt-4 md:mb-12 max-w-2xl">
              <h1 className="mb-4 font-semibold text-gray-800 text-4xl lg:text-5xl dark:text-gray-200">
                Fully customizable rules to match your unique needs
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                We provide you with a test account that can be set up in
                seconds. Our main focus is getting responses to you as soon as
                we can.
              </p>
            </div>

            <blockquote className="hidden md:block relative max-w-sm">
              <IconQuotes className="absolute top-0 start-0 transform -translate-x-4 -translate-y-6 size-12" />

              <div className="relative z-10">
                <p className="text-xl italic text-gray-800 dark:text-white">
                  A random fucking facts about resumes, blah blah blah
                </p>
              </div>

              <footer className="mt-3">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="size-8 rounded-full"
                      src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                      alt="Image Description"
                    />
                  </div>
                  <div className="grow ms-4">
                    <div className="font-semibold text-gray-800 dark:text-gray-200">
                      Sam Altman
                    </div>
                    <div className="text-xs text-gray-500">
                      works at openai occasiionaly, super gay
                    </div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>

          <div>
            <div className="lg:max-w-xl lg:mx-auto lg:me-0 ms-auto">
              <div className="p-4 sm:p-7 flex flex-col bg-white dark:bg-slate-900">
                <h1 className="text-center block text-2xl font-bold text-gray-800 dark:text-white">
                  Let&apos;s get fucking started
                </h1>
                <OnboardingForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
