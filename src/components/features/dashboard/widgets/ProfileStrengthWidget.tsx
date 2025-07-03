import React from 'react';

export function ProfileStrengthWidget() {
  return (
    <section className="bg-white rounded-xl shadow border p-6">
      <h2 className="text-lg font-semibold mb-4">Profile Strength</h2>
      <div className="mb-3">
        <div className="w-full bg-zinc-200 rounded-full h-2 mb-1">
          <div
            className="bg-blue-500 h-2 rounded-full"
            style={{width: '70%'}}
          />
        </div>
        <div className="text-xs text-zinc-500">70% complete</div>
      </div>
      <ul className="text-xs text-zinc-600 list-disc pl-5 space-y-1">
        <li>Add a profile photo</li>
        <li>Update your work experience</li>
        <li>Write a short bio</li>
      </ul>
    </section>
  );
}
