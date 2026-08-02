"use client";

import { useState } from "react";
import AppHeader from "@/components/AppHeader";
import { ExternalLink } from "lucide-react";

const divisions = [
  {
    name: "11U A",
    url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRwKQ3z6EpEqCW7Xvs_JCPi8wcqpKN_LKGiR1Q-gLo00JzC3b2scx6TDTkslBVw2r_srvk3nOis2KdJ/pubhtml?gid=0&single=true&widget=true&headers=false",
  },
  {
    name: "11U AA",
    url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRwKQ3z6EpEqCW7Xvs_JCPi8wcqpKN_LKGiR1Q-gLo00JzC3b2scx6TDTkslBVw2r_srvk3nOis2KdJ/pubhtml?gid=806121374&single=true&widget=true&headers=false",
  },
  {
    name: "11U AAA",
    url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRwKQ3z6EpEqCW7Xvs_JCPi8wcqpKN_LKGiR1Q-gLo00JzC3b2scx6TDTkslBVw2r_srvk3nOis2KdJ/pubhtml?gid=24874258&single=true&widget=true&headers=false",
  },
];

const sheetUrl =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vRwKQ3z6EpEqCW7Xvs_JCPi8wcqpKN_LKGiR1Q-gLo00JzC3b2scx6TDTkslBVw2r_srvk3nOis2KdJ/pubhtml";

export default function SchedulePage() {
  const [selectedDivision, setSelectedDivision] = useState(divisions[0]);

  return (
    <>
      <AppHeader title="Schedule" />

      <main className="min-h-screen bg-[#EAF3FB] py-6 px-4">
        <div className="mx-auto max-w-7xl">

          {/* Division Tabs */}
          <div className="mb-6 flex justify-center gap-3 flex-wrap">
            {divisions.map((division) => (
              <button
                key={division.name}
                onClick={() => setSelectedDivision(division)}
                className={`rounded-xl px-5 py-3 font-semibold transition ${
                  selectedDivision.name === division.name
                    ? "bg-[#002B5C] text-white shadow-lg"
                    : "bg-white text-[#002B5C] shadow hover:bg-slate-100"
                }`}
              >
                {division.name}
              </button>
            ))}
          </div>

          {/* Schedule */}
          <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
            <iframe
              key={selectedDivision.url}
              src={selectedDivision.url}
              title={`${selectedDivision.name} Schedule`}
              width="100%"
              height="1200"
              className="border-0"
            />
          </div>

          {/* Open Full Schedule */}
          <div className="mt-6 text-center">
            <a
              href={sheetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#002B5C] px-6 py-3 font-semibold text-white transition hover:bg-[#003B80]"
            >
              <ExternalLink size={18} />
              Open Full Schedule
            </a>
          </div>

        </div>
      </main>
    </>
  );
}