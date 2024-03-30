'use server';

import { revalidatePath } from 'next/cache';

import { createClient } from '@/utils/supabase/server';

// https://github.com/vercel/next.js/tree/canary/examples/next-forms
export async function initializeUser(
  previous: {
    message: string;
  },
  formData: FormData
) {
  const data = Object.fromEntries(formData.entries());

  try {
    const supabase = createClient();
    const response = await supabase.from('users').insert({
      ...data
    });
    console.log('response', response);
    revalidatePath('/');
    return { message: 'success' };
  } catch (e) {
    console.error(e);
    return { message: 'error' };
  }
}
