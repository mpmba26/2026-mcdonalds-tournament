"use client";

import AppHeader from "@/components/AppHeader";
import { ExternalLink } from "lucide-react";

export default function SchedulePage() {
  return (
    <>
      <AppHeader title="Schedule / Scores" />

      <main className="min-h-screen bg-[#EAF3FB] px-4 py-6">
        <div className="mx-auto max-w-6xl space-y-6">

          {/* Schedule / Scores */}
          <section className="rounded-2xl bg-white p-4 shadow-lg md:p-6">
            <h2 className="text-2xl font-bold text-[#002B5C]">
              13U House League Tournament
            </h2>

            <p className="mt-3 text-slate-700">
              Schedule and tournament scores.
            </p>

            <div className="mt-5 overflow-hidden rounded-xl border border-slate-200">
              <iframe
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQcmuqFNoVovF6QMsQtmvvTmzMhfTztJWAfFXUPZtV6A0a4q4B69jSIfZ9haE91bQ7CPrzGobrBbilG/pubhtml?gid=798450824&single=true&widget=true&headers=false"
                className="h-[700px] w-full"
                title="13U House League Tournament Schedule and Scores"
              />
            </div>
          </section>

          {/* Open Full Sheet */}
          <section className="pb-4 text-center">
            <a
              href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQcmuqFNoVovF6QMsQtmvvTmzMhfTztJWAfFXUPZtV6A0a4q4B69jSIfZ9haE91bQ7CPrzGobrBbilG/pubhtml?gid=798450824&single=true&widget=true&headers=false"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#002B5C] px-6 py-3 font-semibold text-white shadow-md transition hover:bg-[#003B80]"
            >
              <ExternalLink size={18} />
              Open Full Sheet
            </a>
          </section>

        </div>
      </main>
    </>
  );
}