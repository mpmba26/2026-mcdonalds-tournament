"use client";

import AppHeader from "@/components/AppHeader";

export default function PitchCountsPage() {
  return (
    <>
      <AppHeader title="Pitch Tracking" />

      <main className="min-h-screen bg-[#EAF3FB] px-4 py-6">
        <div className="mx-auto max-w-6xl">
          <section className="rounded-2xl bg-white p-4 shadow-lg md:p-6">
            <h2 className="text-2xl font-bold text-[#002B5C]">
              15U AAA BNL Provincial Tournament
            </h2>

            <p className="mt-3 text-slate-700">
              Tournament pitch tracking for all participating teams.
            </p>

            <div className="mt-5 overflow-hidden rounded-xl border border-slate-200">
              <iframe
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSuUrh9IT4K6TrlAfqqrXhbHFkN9qKU72AMnDeR8orVTYmK60kzQ_QWxPaIF0mEMjNvxa3YcnBId1NL/pubhtml?widget=true&headers=false"
                className="h-[800px] w-full"
                title="15U AAA BNL Provincial Tournament Pitch Tracking"
              />
            </div>
          </section>
        </div>
      </main>
    </>
  );
}