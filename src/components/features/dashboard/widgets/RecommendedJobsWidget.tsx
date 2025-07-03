import React from 'react';
import {Button} from '@/components/ui/button';

export function RecommendedJobsWidget() {
  return (
    <section className="bg-white rounded-xl shadow border p-6">
      <h2 className="text-lg font-semibold mb-4">Recommended Jobs</h2>
      <ul className="flex flex-col gap-4">
        {[1, 2, 3].map(i => (
          <li
            key={i}
            className="flex items-center justify-between gap-2 p-3 rounded-lg hover:bg-zinc-50 transition"
          >
            <div>
              <div className="font-medium">Frontend Developer</div>
              <div className="text-xs text-zinc-500">Acme Corp</div>
            </div>
            <Button size="sm">Apply</Button>
          </li>
        ))}
      </ul>
    </section>
  );
}
