'use client';

import React, {useState} from 'react';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';

interface AuthFormProps {
  mode: 'sign-in' | 'sign-up';
}

export function AuthForm({mode}: AuthFormProps) {
  // TODO: Integrate with backend authentication/registration
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);
    // TODO: Replace with real API call
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1000);
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <Input type="email" placeholder="Email" required disabled={loading} />
      <Input
        type="password"
        placeholder="Password"
        required
        disabled={loading}
      />
      {mode === 'sign-up' && (
        <Input
          type="text"
          placeholder="Full Name"
          required
          disabled={loading}
        />
      )}
      {error && <div className="text-red-500 text-sm">{error}</div>}
      {success && <div className="text-green-600 text-sm">Success!</div>}
      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? 'Loading...' : mode === 'sign-in' ? 'Sign In' : 'Sign Up'}
      </Button>
    </form>
  );
}

export default AuthForm;
