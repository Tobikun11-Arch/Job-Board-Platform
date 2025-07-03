import React from 'react';

export function RecentActivityWidget() {
  return (
    <section className="bg-white rounded-xl shadow border p-6">
      <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
      <ul className="text-sm text-zinc-700 flex flex-col gap-2">
        <li>
          ✅ You applied to{' '}
          <span className="font-medium">Frontend Developer</span> at Acme Corp
        </li>
        <li>✏️ Profile updated</li>
        <li>
          ⭐️ You saved <span className="font-medium">Product Manager</span> at
          Wayne Enterprises
        </li>
      </ul>
    </section>
  );
}
