'use client';

import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import * as z from 'zod';
import {Input} from '@/components/ui/input';
import {Button} from '@/components/ui/button';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage
} from '@/components/ui/form';
import Link from 'next/link';
import {Eye, EyeOff} from 'lucide-react';

const registerSchema = z
  .object({
    email: z.string().email({message: 'Invalid email address'}),
    username: z
      .string()
      .min(3, {message: 'Username must be at least 3 characters'}),
    password: z
      .string()
      .min(6, {message: 'Password must be at least 6 characters'}),
    confirmpassword: z.string()
  })
  .refine(data => data.password === data.confirmpassword, {
    message: 'Passwords do not match',
    path: ['confirmpassword']
  });

type RegisterFormValues = z.infer<typeof registerSchema>;

export default function Page() {
  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {email: '', username: '', password: '', confirmpassword: ''}
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(values: RegisterFormValues) {
    setIsLoading(true);
    setError(null);
    try {
      // TODO: Replace with your register logic (API call)
      await new Promise(res => setTimeout(res, 1200));
      // Simulate error: setError("Registration failed")
    } catch (e) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100 flex justify-center items-center px-4">
      <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg border border-zinc-100">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Create your account
        </h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <FormField
              control={form.control}
              name="email"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      {...field}
                      disabled={isLoading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="username"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      autoComplete="username"
                      placeholder="your username"
                      {...field}
                      disabled={isLoading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showPassword ? 'text' : 'password'}
                        autoComplete="new-password"
                        placeholder="••••••••"
                        {...field}
                        disabled={isLoading}
                      />
                      <button
                        type="button"
                        tabIndex={-1}
                        className="absolute right-2 top-1.5 text-zinc-400 hover:text-zinc-700"
                        onClick={() => setShowPassword(v => !v)}
                        aria-label={
                          showPassword ? 'Hide password' : 'Show password'
                        }
                      >
                        {showPassword ? (
                          <EyeOff size={18} />
                        ) : (
                          <Eye size={18} />
                        )}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmpassword"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Confirm password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showConfirm ? 'text' : 'password'}
                        autoComplete="new-password"
                        placeholder="••••••••"
                        {...field}
                        disabled={isLoading}
                      />
                      <button
                        type="button"
                        tabIndex={-1}
                        className="absolute right-2 top-1.5 text-zinc-400 hover:text-zinc-700"
                        onClick={() => setShowConfirm(v => !v)}
                        aria-label={
                          showConfirm ? 'Hide password' : 'Show password'
                        }
                      >
                        {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {error && (
              <div className="text-destructive text-sm text-center">
                {error}
              </div>
            )}
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? 'Creating account...' : 'Sign up'}
            </Button>
          </form>
        </Form>
        <div className="mt-6 text-center text-sm text-zinc-500">
          Already have an account?{' '}
          <Link
            href="/login"
            className="text-primary hover:underline font-medium"
          >
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}
