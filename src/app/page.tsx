import React from 'react';
import Link from 'next/link';
import {Button} from '@/components/ui/button';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-zinc-100 flex flex-col items-center justify-between py-12 px-4">
      {/* Hero Section */}
      <section className="w-full max-w-4xl flex flex-col items-center text-center gap-6 mt-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-zinc-900 leading-tight">
          Find the Right <span className="text-blue-600">Job</span> or{' '}
          <span className="text-green-600">Talent</span> — Fast.
        </h1>
        <p className="text-lg md:text-xl text-zinc-600 max-w-2xl">
          The modern job platform that connects top talent with the best
          employers. Discover your next opportunity or hire your next star — all
          in one place.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Link href="/register?role=jobseeker">
            <Button size="lg" className="w-48">
              Find a Job
            </Button>
          </Link>
          <Link href="/register?role=employer">
            <Button
              size="lg"
              variant="outline"
              className="w-48 border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              Hire Talent
            </Button>
          </Link>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-center gap-12 mt-24 mb-16">
        {/* Placeholder for illustration */}
        <div className="hidden md:block flex-1">
          <div className="w-80 h-80 bg-gradient-to-br from-blue-100 to-green-100 rounded-3xl flex items-center justify-center shadow-lg">
            <span className="text-7xl text-blue-400">💼</span>
          </div>
        </div>
        {/* Steps */}
        <div className="flex-1 flex flex-col gap-8">
          <h2 className="text-2xl font-bold text-zinc-800 mb-2">
            How it works
          </h2>
          <ol className="space-y-6">
            <li className="flex items-start gap-4">
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-lg">
                1
              </span>
              <div>
                <div className="font-semibold text-zinc-800">Sign Up</div>
                <div className="text-zinc-600 text-sm">
                  Create your free account as a job seeker or employer.
                </div>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-lg">
                2
              </span>
              <div>
                <div className="font-semibold text-zinc-800">Connect</div>
                <div className="text-zinc-600 text-sm">
                  Browse jobs or talent, and connect instantly with the right
                  match.
                </div>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 font-bold text-lg">
                3
              </span>
              <div>
                <div className="font-semibold text-zinc-800">
                  Get Hired / Hire
                </div>
                <div className="text-zinc-600 text-sm">
                  Land your dream job or hire your next star employee with ease.
                </div>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* Trust/CTA Section */}
      <section className="w-full max-w-3xl flex flex-col items-center gap-4 mb-8">
        <div className="text-zinc-500 text-sm">
          Trusted by professionals and companies worldwide
        </div>
        <div className="flex gap-6 opacity-70">
          <span className="text-2xl">🌟</span>
          <span className="text-2xl">🏢</span>
          <span className="text-2xl">🚀</span>
          <span className="text-2xl">🤝</span>
        </div>
        <div className="mt-6">
          <Link href="/register">
            <Button size="lg" className="px-8">
              Get Started Free
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
