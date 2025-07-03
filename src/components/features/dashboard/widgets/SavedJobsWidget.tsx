import React from 'react';
import {Button} from '@/components/ui/button';

export function SavedJobsWidget() {
  return (
    <section className="bg-white rounded-xl shadow border p-6">
      <h2 className="text-lg font-semibold mb-4">Saved Jobs</h2>
      <ul className="flex flex-col gap-4">
        <li className="flex items-center justify-between gap-2 p-3 rounded-lg hover:bg-zinc-50 transition">
          <div>
            <div className="font-medium">Product Manager</div>
            <div className="text-xs text-zinc-500">Wayne Enterprises</div>
          </div>
          <Button size="sm" variant="outline">
            Remove
          </Button>
        </li>
        <li className="flex items-center justify-between gap-2 p-3 rounded-lg hover:bg-zinc-50 transition">
          <div>
            <div className="font-medium">QA Analyst</div>
            <div className="text-xs text-zinc-500">Stark Industries</div>
          </div>
          <Button size="sm" variant="outline">
            Remove
          </Button>
        </li>
      </ul>
    </section>
  );
}
