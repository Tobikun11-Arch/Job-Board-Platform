import React from 'react';
import {ForgotPasswordForm} from '@/components/ui/auth/ForgotPasswordForm';

export default function ForgotPasswordPage() {
  // TODO: Integrate with backend password reset request
  // TODO: Implement loading, error, and success states
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-50 to-zinc-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Forgot Password</h1>
        <ForgotPasswordForm />
      </div>
    </div>
  );
}
