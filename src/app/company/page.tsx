import React from 'react';
import {CompanyProfileForm} from '@/components/features/company/CompanyProfileForm';

export default function CompanyProfilePage() {
  // TODO: Fetch company profile data from backend
  // TODO: Implement loading, error, and empty states
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-50 to-zinc-100">
      <div className="w-full max-w-2xl p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Company Profile</h1>
        <CompanyProfileForm />
      </div>
    </div>
  );
}
