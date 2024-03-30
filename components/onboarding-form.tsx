'use client';

import { useFormState, useFormStatus } from 'react-dom';

import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { initializeUser } from '@/app/onboarding/actions';

const OnboardingForm = () => {
  const { pending } = useFormStatus();
  const [state, formAction] = useFormState(initializeUser, { message: '' });

  return (
    <form action={formAction} className="mt-12">
      {state?.message === 'ERROR' && (
        <div style={{ color: 'red' }}>{state?.message}</div>
      )}
      <p aria-live="polite" className="" role="status">
        {state?.message}
      </p>
      <div className="grid grid-cols-2 gap-6">
        <div className="grid w-full  max-w-sm items-center gap-1.5">
          <Label htmlFor="first-name">First Name</Label>
          <Input
            name="first_name"
            autoComplete=""
            id="first-name"
            placeholder="Sam"
          />
        </div>
        <div className="grid w-full  max-w-sm items-center gap-1.5">
          <Label htmlFor="last-name">Last Name</Label>
          <Input
            name="last_name"
            autoComplete=""
            id="last-name"
            placeholder="Altman"
          />
        </div>
        <div className="col-span-2 grid w-full  items-center gap-1.5">
          <Label htmlFor="email">Email Address</Label>
          <Input
            name="email"
            autoComplete=""
            id="email"
            placeholder="samaltman@open.ai"
          />
        </div>
        <div className="col-span-2 grid w-full  items-center gap-1.5">
          <Label htmlFor="bio">Bio</Label>
          <Textarea
            name="bio"
            autoComplete=""
            id="bio"
            rows={4}
            placeholder="AI is cool i guess"
          />
        </div>
        <div className="col-span-2 grid w-full  items-center gap-1.5">
          <Label htmlFor="location">Location</Label>
          <Input
            name="location"
            autoComplete=""
            id="location"
            placeholder="San Francisco, CA"
          />
        </div>
        <div className="col-span-2 grid w-full  items-center gap-1.5">
          <Label htmlFor="website">Website</Label>
          <Input
            name="website"
            autoComplete=""
            id="website"
            placeholder="https://blog.samaltman.com"
          />
        </div>
      </div>

      <div className="mt-5">
        <Button
          aria-disabled={pending}
          type="submit"
          className="w-full"
          size="lg"
        >
          {pending ? 'Loading...' : 'Submit'}
        </Button>
      </div>
    </form>
  );
};

export default OnboardingForm;
