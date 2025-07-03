import React from 'react';

export function MyApplicationsWidget() {
  return (
    <section className="bg-white rounded-xl shadow border p-6">
      <h2 className="text-lg font-semibold mb-4">My Applications</h2>
      <ul className="flex flex-col gap-4">
        <li className="flex items-center justify-between gap-2 p-3 rounded-lg hover:bg-zinc-50 transition">
          <div>
            <div className="font-medium">UI Designer</div>
            <div className="text-xs text-zinc-500">Globex Inc</div>
          </div>
          <span className="text-xs px-2 py-1 rounded bg-blue-100 text-blue-700">
            In Review
          </span>
        </li>
        <li className="flex items-center justify-between gap-2 p-3 rounded-lg hover:bg-zinc-50 transition">
          <div>
            <div className="font-medium">Backend Engineer</div>
            <div className="text-xs text-zinc-500">Umbrella LLC</div>
          </div>
          <span className="text-xs px-2 py-1 rounded bg-green-100 text-green-700">
            Interview
          </span>
        </li>
      </ul>
    </section>
  );
}
