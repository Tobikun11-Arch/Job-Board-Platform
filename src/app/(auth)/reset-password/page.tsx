import React from 'react';
import {ResetPasswordForm} from '@/components/ui/auth/ResetPasswordForm';

export default function ResetPasswordPage() {
  // TODO: Integrate with backend password reset
  // TODO: Implement loading, error, and success states
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-50 to-zinc-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Reset Password</h1>
        <ResetPasswordForm />
      </div>
    </div>
  );
}
