"use client";

import { useEffect } from "react";
import Script from "next/script";
import AppHeader from "@/components/AppHeader";

declare global {
  interface Window {
    GC?: {
      scoreboard?: {
        init: (options: {
          target: string;
          widgetId: string;
          maxVerticalGamesVisible?: number;
        }) => void;
      };
    };
  }
}

export default function ScoresPage() {
  const initializeGameChanger = () => {
    if (window.GC?.scoreboard) {
      window.GC.scoreboard.init({
        target: "#gc-scoreboard-widget-1ame",
        widgetId: "296f1e76-66c9-4a1a-b2c0-50596a848910",
        maxVerticalGamesVisible: 4,
      });
    }
  };

  useEffect(() => {
    initializeGameChanger();
  }, []);

  return (
    <>
      <AppHeader title="Scores" />

      <main className="min-h-screen bg-[#EAF3FB] px-4 py-6">
        <div className="mx-auto max-w-6xl">
          <section className="rounded-2xl bg-white p-5 shadow-lg md:p-6">
            <h2 className="text-2xl font-bold text-[#002B5C]">
              15U AAA BNL Provincial Tournament
            </h2>

            <p className="mt-3 text-slate-700">
              Live tournament scores and game information.
            </p>

            <div className="mt-6 overflow-hidden rounded-xl border border-slate-200">
              <div
                id="gc-scoreboard-widget-1ame"
                className="min-h-[200px] w-full"
              />
            </div>
          </section>
        </div>
      </main>

      <Script
        src="https://widgets.gc.com/static/js/sdk.v1.js"
        strategy="afterInteractive"
        onLoad={initializeGameChanger}
      />
    </>
  );
}