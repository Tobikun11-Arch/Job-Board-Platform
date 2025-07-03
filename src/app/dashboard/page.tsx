import React from 'react';
import {RecommendedJobsWidget} from '@/components/features/dashboard/widgets/RecommendedJobsWidget';
import {MyApplicationsWidget} from '@/components/features/dashboard/widgets/MyApplicationsWidget';
import {SavedJobsWidget} from '@/components/features/dashboard/widgets/SavedJobsWidget';
import {ProfileStrengthWidget} from '@/components/features/dashboard/widgets/ProfileStrengthWidget';
import {RecentActivityWidget} from '@/components/features/dashboard/widgets/RecentActivityWidget';

export default function DashboardPage() {
  return (
    <div className="w-full max-w-5xl flex flex-col gap-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 flex flex-col gap-8">
          <RecommendedJobsWidget />
          <MyApplicationsWidget />
          <SavedJobsWidget />
        </div>
        <div className="flex flex-col gap-8">
          <ProfileStrengthWidget />
          <RecentActivityWidget />
        </div>
      </div>
    </div>
  );
}
