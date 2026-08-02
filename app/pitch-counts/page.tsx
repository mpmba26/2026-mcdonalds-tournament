"use client";

import { useState } from "react";
import AppHeader from "@/components/AppHeader";
import { ExternalLink } from "lucide-react";

const divisions = [
  {
    name: "11U A",
    url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ_4LTls01QvNv4lsZwOw0pBlVMNpFVAZUppGXSFlcBIWXChrEXHMAKr38fsVa2dpYbXmZgoQNo4l1a/pubhtml?gid=1473424599&single=true&widget=true&headers=false",
  },
  {
    name: "11U AA",
    url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ_4LTls01QvNv4lsZwOw0pBlVMNpFVAZUppGXSFlcBIWXChrEXHMAKr38fsVa2dpYbXmZgoQNo4l1a/pubhtml?gid=599228539&single=true&widget=true&headers=false",
  },
  {
    name: "11U AAA",
    url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ_4LTls01QvNv4lsZwOw0pBlVMNpFVAZUppGXSFlcBIWXChrEXHMAKr38fsVa2dpYbXmZgoQNo4l1a/pubhtml?gid=1476598743&single=true&widget=true&headers=false",
  },
];

const sheetUrl =
  "https://docs.google.com/spreadsheets/d/1gS-TU0lVuIxUDdJKY0QDAX7aO4IilwPdwWfs4Eqr2MU/edit?usp=sharing";

export default function PitchCountsPage() {
  const [selectedDivision, setSelectedDivision] = useState(divisions[0]);

  return (
    <>
      <AppHeader title="Pitch Counts" />

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

          {/* Google Sheet */}
          <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
            <iframe
              key={selectedDivision.url}
              src={selectedDivision.url}
              title={`${selectedDivision.name} Pitch Counts`}
              width="100%"
              height="1200"
              className="border-0"
            />
          </div>

          {/* Open Full Sheet */}
          <div className="mt-6 text-center">
            <a
              href={sheetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#002B5C] px-6 py-3 font-semibold text-white transition hover:bg-[#003B80]"
            >
              <ExternalLink size={18} />
              Open Full Sheet
            </a>
          </div>
        </div>
      </main>
    </>
  );
}