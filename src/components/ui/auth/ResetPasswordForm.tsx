import React, {useState} from 'react';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';

export function ResetPasswordForm() {
  // TODO: Integrate with backend password reset
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
      <Input
        type="password"
        placeholder="New Password"
        required
        disabled={loading}
      />
      <Input
        type="password"
        placeholder="Confirm Password"
        required
        disabled={loading}
      />
      {error && <div className="text-red-500 text-sm">{error}</div>}
      {success && (
        <div className="text-green-600 text-sm">Password reset successful!</div>
      )}
      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? 'Resetting...' : 'Reset Password'}
      </Button>
    </form>
  );
}

export default ResetPasswordForm;
