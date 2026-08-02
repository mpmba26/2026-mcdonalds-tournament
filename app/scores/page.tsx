"use client";

import AppHeader from "@/components/AppHeader";
import Script from "next/script";

export default function ScoresPage() {
  return (
    <main className="min-h-screen bg-slate-100">
      <AppHeader title="Live Scores" />

      <div className="mx-auto max-w-4xl p-4 space-y-6">
        {/* 11U A */}
        <div className="rounded-2xl bg-white p-5 shadow-lg">
          <h2 className="mb-4 text-2xl font-bold text-[#002B5C]">
            11U A
          </h2>

          <div id="gc-scoreboard-widget-vmk4"></div>
        </div>

        {/* 11U AA */}
        <div className="rounded-2xl bg-white p-5 shadow-lg">
          <h2 className="mb-4 text-2xl font-bold text-[#002B5C]">
            11U AA
          </h2>

          <div id="gc-scoreboard-widget-r5lf"></div>
        </div>

        {/* 11U AAA */}
        <div className="rounded-2xl bg-white p-5 shadow-lg">
          <h2 className="mb-4 text-2xl font-bold text-[#002B5C]">
            11U AAA
          </h2>

          <div id="gc-scoreboard-widget-5hbm"></div>
        </div>
      </div>

      <Script
        src="https://widgets.gc.com/static/js/sdk.v1.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (!(window as any).GC) return;

          // 11U A
          (window as any).GC.scoreboard.init({
            target: "#gc-scoreboard-widget-vmk4",
            widgetId: "5e81870c-6ece-4959-b8af-52515000aab6",
            maxVerticalGamesVisible: 4,
          });

          // 11U AA
          (window as any).GC.scoreboard.init({
            target: "#gc-scoreboard-widget-r5lf",
            widgetId: "8791067e-a2fb-487d-b82b-a20b5b85e805",
            maxVerticalGamesVisible: 4,
          });

          // 11U AAA
          (window as any).GC.scoreboard.init({
            target: "#gc-scoreboard-widget-5hbm",
            widgetId: "168a85dc-27f1-4a4f-8013-3d20c9ef2461",
            maxVerticalGamesVisible: 4,
          });
        }}
      />
    </main>
  );
}
