import * as React from "react";

export function AppShell({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <header className="border-b border-zinc-800 px-4 py-3 text-lg font-semibold">{title}</header>
      <main className="p-4">{children}</main>
    </div>
  );
}
