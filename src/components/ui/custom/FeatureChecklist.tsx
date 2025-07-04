import React from 'react';
import {cn} from '@/lib/utils';
import {CheckCircle2, Circle} from 'lucide-react';

const checklist = [
  {
    group: 'Authentication & Onboarding',
    items: [
      'Sign In / Sign Up Pages',
      'Forgot/Reset Password Flows',
      'Onboarding Wizard'
    ]
  },
  {
    group: 'Profile Management',
    items: ['User Profile Page', 'Company Profile Page']
  },
  {
    group: 'Job Search & Listings',
    items: ['Job Feed/List Page', 'Job Card Component', 'Job Details Page']
  },
  {
    group: 'Job Application Flow',
    items: ['Apply Modal/Page', 'Application Status Tracking']
  },
  {
    group: 'Saved Jobs & Recommendations',
    items: ['Saved Jobs Page', 'Job Recommendations']
  },
  {
    group: 'Messaging & Notifications',
    items: ['Messaging UI', 'Notification Center']
  },
  {
    group: 'Dashboard Enhancements',
    items: [
      'Activity Feed',
      'Stats/Analytics Widgets',
      'Empty/Error/Loading States'
    ]
  },
  {
    group: 'Settings & Preferences',
    items: ['Account Settings', 'Theme Switcher']
  },
  {
    group: 'Accessibility & Responsiveness',
    items: [
      'Keyboard Navigation',
      'Screen Reader Support',
      'Mobile Responsiveness'
    ]
  },
  {
    group: 'UI/UX Polish',
    items: ['Skeleton Loaders', 'Error Boundaries', 'Reusable UI Components']
  }
];

export function FeatureChecklist() {
  return (
    <div className="w-full max-w-xl mx-auto rounded-lg border bg-white/90 p-6 shadow-md">
      <h2 className="text-lg font-semibold mb-4">Frontend Feature Checklist</h2>
      <div className="space-y-6">
        {checklist.map(section => (
          <div key={section.group}>
            <div className="font-medium text-zinc-700 mb-2">
              {section.group}
            </div>
            <ul className="space-y-1">
              {section.items.map(item => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-zinc-600"
                >
                  <Circle className="size-4 text-zinc-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeatureChecklist;
