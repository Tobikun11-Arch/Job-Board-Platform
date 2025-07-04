import React from 'react';
import Link from 'next/link';
import {Button} from '@/components/ui/button';

const companies = [
  {name: 'Techify', logo: '🦄'},
  {name: 'Workly', logo: '🏢'},
  {name: 'DevHub', logo: '💻'},
  {name: 'HirePro', logo: '🚀'},
  {name: 'PeopleFirst', logo: '🤝'}
];

export default function HomePage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-between py-12 px-4 overflow-x-hidden bg-gradient-to-br from-blue-50 via-sky-100 to-zinc-100">
      {/* Animated background shapes */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-200 opacity-30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-green-100 opacity-20 rounded-full blur-2xl animate-pulse delay-1000" />
      </div>
      {/* Hero Section */}
      <section className="w-full max-w-4xl flex flex-col items-center text-center gap-6 mt-16 relative z-10">
        <h1 className="text-5xl md:text-6xl font-extrabold text-zinc-900 leading-tight drop-shadow-sm">
          Find the Right <span className="text-blue-600">Job</span> or{' '}
          <span className="text-green-600">Talent</span> — Fast.
        </h1>
        <p className="text-xl md:text-2xl text-zinc-600 max-w-2xl font-medium">
          The modern job platform that connects top talent with the best
          employers. Discover your next opportunity or hire your next star — all
          in one place.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Link href="/register?role=jobseeker">
            <Button
              size="lg"
              className="w-48 transition-transform duration-200 hover:scale-105 shadow-lg"
            >
              Find a Job
            </Button>
          </Link>
          <Link href="/register?role=employer">
            <Button
              size="lg"
              variant="outline"
              className="w-48 border-blue-600 text-blue-600 hover:bg-blue-50 transition-transform duration-200 hover:scale-105 shadow-lg"
            >
              Hire Talent
            </Button>
          </Link>
        </div>
      </section>
      {/* SVG Wave Divider */}
      <div className="w-full overflow-hidden -mb-2 mt-12">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-16 md:h-24"
        >
          <path
            fill="#e0f2fe"
            fillOpacity="1"
            d="M0,32 C360,80 1080,0 1440,48 L1440,80 L0,80 Z"
          />
        </svg>
      </div>
      {/* Featured Companies Bar */}
      <section className="w-full max-w-3xl flex flex-col items-center gap-2 mb-8">
        <div className="text-zinc-500 text-sm mb-1">
          Trusted by top companies
        </div>
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {companies.map(company => (
            <div key={company.name} className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl mb-1 drop-shadow-sm">
                {company.logo}
              </span>
              <span className="text-xs text-zinc-400 font-medium">
                {company.name}
              </span>
            </div>
          ))}
        </div>
      </section>
      {/* How It Works Section */}
      <section className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-center gap-12 mt-12 mb-16">
        {/* Placeholder for illustration */}
        <div className="hidden md:block flex-1">
          <div className="w-80 h-80 bg-gradient-to-br from-blue-100 to-green-100 rounded-3xl flex items-center justify-center shadow-2xl border border-blue-100">
            <span className="text-7xl text-blue-400 animate-bounce">💼</span>
          </div>
        </div>
        {/* Steps */}
        <div className="flex-1 flex flex-col gap-8">
          <h2 className="text-3xl font-bold text-zinc-800 mb-2">
            How it works
          </h2>
          <ol className="space-y-6">
            <li className="flex items-start gap-4 bg-white/80 rounded-xl shadow-md p-4">
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-lg border-2 border-blue-200">
                1
              </span>
              <div>
                <div className="font-semibold text-zinc-800">Sign Up</div>
                <div className="text-zinc-600 text-sm">
                  Create your free account as a job seeker or employer.
                </div>
              </div>
            </li>
            <li className="flex items-start gap-4 bg-white/80 rounded-xl shadow-md p-4">
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-lg border-2 border-green-200">
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
            <li className="flex items-start gap-4 bg-white/80 rounded-xl shadow-md p-4">
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 font-bold text-lg border-2 border-yellow-200">
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
          Join thousands of professionals and companies worldwide
        </div>
        <div className="flex gap-6 opacity-80">
          <span className="text-2xl">🌟</span>
          <span className="text-2xl">🏢</span>
          <span className="text-2xl">🚀</span>
          <span className="text-2xl">🤝</span>
        </div>
        <div className="mt-6">
          <Link href="/register">
            <Button
              size="lg"
              className="px-8 shadow-xl transition-transform duration-200 hover:scale-105 hover:bg-blue-600 hover:text-white"
            >
              Get Started Free
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
