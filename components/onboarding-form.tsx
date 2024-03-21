'use client';

import { FormEvent, useReducer, useState } from 'react';
import { Profile } from '@/types/index';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

enum ActionType {
  SetProfile,
  UpdateField
}

const initialState: Profile | null = null;
function profileReducer(
  state: Profile | null,
  action: { type: ActionType; payload: any }
): Profile | null {
  switch (action.type) {
    case ActionType.SetProfile:
      return action.payload;
    case ActionType.UpdateField:
      return {
        ...state,
        [action.payload.field]: action.payload.value
      };
    default:
      return state;
  }
}

const OnboardingForm = () => {
  const [profile, dispatch] = useReducer(profileReducer, initialState);

  const handleFieldChange = (field: keyof Profile, value: string) => {
    dispatch({ type: ActionType.UpdateField, payload: { field, value } });
  };

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setError(null); // Clear previous errors when a new request starts

    try {
      const formData = new FormData(event.currentTarget);
      const response = await fetch('/api/submit', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        throw new Error('Failed to submit the data. Please try again.');
      }

      // Handle response if necessary
      const data = await response.json();
      // ...
    } catch (error) {
      // Capture the error message to display to the user
      setError(error.message);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-12">
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <div className="grid grid-cols-2 gap-6">
        <div className="grid w-full  max-w-sm items-center gap-1.5">
          <Label htmlFor="first-name">First Name</Label>
          <Input
            required
            id="first-name"
            placeholder="Sam"
            value={profile?.first_name}
            onChange={(e) => handleFieldChange('first_name', e.target.value)}
          />
        </div>
        <div className="grid w-full  max-w-sm items-center gap-1.5">
          <Label htmlFor="last-name">Last Name</Label>
          <Input
            required
            id="last-name"
            placeholder="Altman"
            value={profile?.last_name}
            onChange={(e) => handleFieldChange('last_name', e.target.value)}
          />
        </div>
        <div className="col-span-2 grid w-full  items-center gap-1.5">
          <Label htmlFor="email">Email Address</Label>
          <Input
            required
            id="email"
            placeholder="samaltman@open.ai"
            value={profile?.email}
            onChange={(e) => handleFieldChange('email', e.target.value)}
          />
        </div>
        <div className="col-span-2 grid w-full  items-center gap-1.5">
          <Label htmlFor="bio">Bio</Label>
          <Textarea
            required
            id="bio"
            rows={4}
            placeholder="A Full Stack Engineer, dedicated to developing robust products and composing elegant, refined code."
            value={profile?.bio}
            onChange={(e) => handleFieldChange('bio', e.target.value)}
          />
        </div>
        <div className="col-span-2 grid w-full  items-center gap-1.5">
          <Label htmlFor="location">Location</Label>
          <Input
            required
            id="location"
            placeholder="San Francisco, CA"
            value={profile?.location}
            onChange={(e) => handleFieldChange('location', e.target.value)}
          />
        </div>
        <div className="col-span-2 grid w-full  items-center gap-1.5">
          <Label htmlFor="website">Website</Label>
          <Input
            required
            id="website"
            placeholder="https://blog.samaltman.com"
            value={profile?.website}
            onChange={(e) => handleFieldChange('website', e.target.value)}
          />
        </div>
      </div>

      <div className="mt-5">
        <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Submit'}
        </Button>
      </div>
    </form>
  );
};

export default OnboardingForm;
