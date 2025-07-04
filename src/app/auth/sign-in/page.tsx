import React from 'react';
import {AuthForm} from '@/components/ui/auth/AuthForm';

export default function SignInPage() {
  // TODO: Integrate with backend authentication
  // TODO: Implement loading, error, and success states
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-50 to-zinc-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Sign In</h1>
        <AuthForm mode="sign-in" />
      </div>
    </div>
  );
}
