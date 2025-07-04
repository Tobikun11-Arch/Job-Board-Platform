import React, {useState} from 'react';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';

export function ForgotPasswordForm() {
  // TODO: Integrate with backend password reset request
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
      {error && <div className="text-red-500 text-sm">{error}</div>}
      {success && (
        <div className="text-green-600 text-sm">
          Check your email for reset instructions.
        </div>
      )}
      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? 'Sending...' : 'Send Reset Link'}
      </Button>
    </form>
  );
}

export default ForgotPasswordForm;
