import React from 'react';
import Link from 'next/link';
import {Button} from '@/components/ui/button';
import {cn} from '@/lib/utils';

const navLinks = [
  {name: 'Home', href: '/dashboard'},
  {name: 'My Jobs', href: '/dashboard/my-jobs'},
  {name: 'Saved', href: '/dashboard/saved'},
  {name: 'Messages', href: '/dashboard/messages'},
  {name: 'Notifications', href: '/dashboard/notifications'},
  {name: 'Settings', href: '/dashboard/settings'}
];

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100 flex">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-64 border-r bg-white/80 backdrop-blur-lg p-6 gap-8">
        {/* Profile summary */}
        <div className="flex flex-col items-center gap-2">
          <div className="size-16 rounded-full bg-zinc-200 mb-2" />
          <div className="font-semibold text-lg">Your Name</div>
          <div className="text-xs text-zinc-500">Frontend Developer</div>
        </div>
        {/* Navigation */}
        <nav className="flex flex-col gap-2 mt-4">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-zinc-100 text-zinc-700'
                // TODO: highlight active link
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="flex-1" />
        <Button variant="outline" className="w-full">
          Post a Job
        </Button>
      </aside>
      {/* Main content */}
      <main className="flex-1 flex flex-col items-center px-2 md:px-8 py-8 gap-8">
        {children}
      </main>
      {/* Right sidebar */}
      <aside className="hidden lg:flex flex-col w-80 border-l bg-white/80 backdrop-blur-lg p-6 gap-6">
        <div className="font-semibold text-base mb-2">Suggestions for you</div>
        <div className="flex flex-col gap-4">
          <div className="rounded-lg bg-zinc-100 p-4 text-sm text-zinc-700">
            Upgrade your profile for better job matches!
          </div>
          <div className="rounded-lg bg-zinc-100 p-4 text-sm text-zinc-700">
            Follow top companies in your field.
          </div>
        </div>
        <div className="mt-8 text-xs text-zinc-400">
          JobBoard Platform &copy; 2025
        </div>
      </aside>
    </div>
  );
}
