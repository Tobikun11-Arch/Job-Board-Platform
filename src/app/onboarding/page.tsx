import React from 'react';
import {OnboardingStepper} from '@/components/ui/auth/OnboardingStepper';

export default function OnboardingPage() {
  // TODO: Integrate with backend onboarding
  // TODO: Implement step logic, loading, error, and success states
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-50 to-zinc-100">
      <div className="w-full max-w-2xl p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Complete Your Profile
        </h1>
        <OnboardingStepper />
      </div>
    </div>
  );
}
