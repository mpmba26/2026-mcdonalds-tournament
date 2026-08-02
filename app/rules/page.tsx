"use client";

import AppHeader from "@/components/AppHeader";
import { ExternalLink } from "lucide-react";

export default function RulesPage() {
  return (
    <>
      <AppHeader title="Rules" />

      <main className="min-h-screen bg-[#EAF3FB] py-6 px-4">
        <div className="mx-auto max-w-4xl space-y-6">

          {/* Baseball NL Rules */}
          <section className="rounded-2xl bg-white p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-[#002B5C]">
              Baseball NL Rules
            </h2>

            <p className="mt-3 text-slate-700">
              The tournament will follow the current Baseball NL Rules and
              Regulations for each division, except where modified below for
              this tournament.
            </p>

            <p className="mt-4 text-slate-700">
              The <strong>2026 Baseball NL Handbook</strong> is located here:
            </p>

            <a
              href="https://www.baseballnl.com/article/76482"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-xl bg-[#002B5C] px-5 py-3 font-semibold text-white transition hover:bg-[#003B80]"
            >
              <ExternalLink size={18} />
              2026 Baseball NL Handbook
            </a>
          </section>

          {/* General Rules */}
          <section className="rounded-2xl bg-white p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-[#002B5C]">
              General Rules
            </h2>

            <ul className="mt-4 list-disc space-y-3 pl-6 text-slate-700">
              <li>All players will bat in a continuous batting order.</li>

              <li>
                Re-entry is permitted for all players except pitchers, in
                accordance with Baseball NL rules.
              </li>

              <li>
                Any pitching change must be reported immediately to both the
                umpire and the GameChanger scorekeeper.
              </li>

              <li>
                All bats must comply with Baseball Canada and Baseball NL
                regulations for the applicable division.
              </li>

              <li>
                Teams playing up a division may continue to use bats approved
                for their own age division.
              </li>

              <li>
                The continuation rule is in effect for all divisions.
              </li>
            </ul>
          </section>

          {/* Game Length */}
          <section className="rounded-2xl bg-white p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-[#002B5C]">
              Game Length
            </h2>

            <ul className="mt-4 list-disc space-y-3 pl-6 text-slate-700">
              <li>All games will be 6 innings.</li>

              <li>No new inning may begin after 1 hour and 45 minutes.</li>

              <li>
                Any game suspended due to weather or darkness will be
                considered complete after 4 complete innings during round robin
                play.
              </li>

              <li>Round robin games may end in a tie.</li>

              <li>Championship games will be scheduled for 6 innings.</li>
            </ul>

            <h3 className="mt-6 text-xl font-bold text-[#002B5C]">
              Mercy Rule
            </h3>

            <ul className="mt-3 list-disc space-y-3 pl-6 text-slate-700">
              <li>
                A 10-run mercy rule is in effect after 4 innings for all round
                robin and playoff games.
              </li>

              <li>
                The mercy rule does not apply to the Championship Game.
              </li>
            </ul>
          </section>

          {/* Pitch Count */}
          <section className="rounded-2xl bg-white p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-[#002B5C]">
              Pitch Count Rules (11U AA &amp; 11U AAA)
            </h2>

            <p className="mt-4 text-slate-700">
              The tournament will follow the Baseball NL Pitch Count Rules.
            </p>

            <p className="mt-4 text-slate-700">
              Pitch counts will be tracked using <strong>GameChanger</strong>.
            </p>

            <ul className="mt-4 list-disc space-y-3 pl-6 text-slate-700">
              <li>
                Mount Pearl teams will act as the lead GameChanger scorekeeper
                for games involving Mount Pearl.
              </li>

              <li>
                For games not involving Mount Pearl, one participating team
                will be designated as the lead GameChanger scorekeeper.
              </li>

              <li>
                Coaches are responsible for ensuring every pitching change is
                communicated to the GameChanger scorekeeper.
              </li>

              <li>
                Official tournament pitch counts will be taken from
                GameChanger.
              </li>
            </ul>

            <p className="mt-5 text-slate-700">
              Pitch counts will be managed using the coach&apos;s honour system.
            </p>

            <p className="mt-4 text-slate-700">
              When a pitcher reaches a Baseball NL pitch count threshold,
              coaches are expected to call for the final batter at the
              appropriate threshold (25, 30, 40, 45, 65, 75 or 85 pitches).
              GameChanger should reflect the pitcher leaving the game within a
              reasonable number of pitches after that threshold.
            </p>

            <p className="mt-4 text-slate-700">
              A pitch count report will be distributed to all teams each
              evening.
            </p>
          </section>

          {/* Pitcher/Catcher */}
          <section className="rounded-2xl bg-white p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-[#002B5C]">
              Pitcher / Catcher Restrictions
            </h2>

            <ul className="mt-4 list-disc space-y-3 pl-6 text-slate-700">
              <li>
                Once a player has pitched in a game, they may not catch for the
                remainder of that game.
              </li>

              <li>
                If multiple games are played on the same day, once a player has
                pitched, they may not catch for the remainder of that day.
              </li>
            </ul>
          </section>

          {/* 11U A */}
          <section className="rounded-2xl bg-white p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-[#002B5C]">
              11U A Modified Rules
            </h2>

            <h3 className="mt-5 text-xl font-bold text-[#002B5C]">
              Pitch Count
            </h3>

            <p className="mt-3 text-slate-700">
              Pitch counts for all 11U A pitchers will be tracked throughout
              the tournament in accordance with the current Baseball NL Pitch
              Count Guidelines.
            </p>

            <p className="mt-4 text-slate-700">
              Pitch counts will be recorded in <strong>GameChanger</strong>.
              Coaches are responsible for ensuring all pitching changes are
              communicated to the official GameChanger scorekeeper.
            </p>

            <h3 className="mt-6 text-xl font-bold text-[#002B5C]">
              Pitching
            </h3>

            <ul className="mt-3 list-disc space-y-3 pl-6 text-slate-700">
              <li>
                After four balls, the coach will enter to pitch while the
                existing strike count remains.
              </li>

              <li>
                The coach must pitch from approximately 35–40 feet, no closer
                than just in front of the pitching mound.
              </li>
            </ul>

            <h3 className="mt-6 text-xl font-bold text-[#002B5C]">
              Base Running
            </h3>

            <ul className="mt-3 list-disc space-y-3 pl-6 text-slate-700">
              <li>A safety base will be used at first base.</li>
              <li>Runs may only score on a batted ball.</li>
              <li>A runner may not score on an overthrow.</li>
            </ul>

            <h3 className="mt-6 text-xl font-bold text-[#002B5C]">
              Runs Per Inning
            </h3>

            <ul className="mt-3 list-disc space-y-3 pl-6 text-slate-700">
              <li>Maximum of 3 runs per inning.</li>
              <li>The final inning is an open inning with unlimited runs.</li>
              <li>
                The open inning will be the next full inning beginning after
                the 1 hour and 45 minute time limit has been reached.
              </li>
            </ul>
          </section>

                    {/* Contact */}
          <section className="rounded-2xl bg-white p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-[#002B5C]">
              Tournament Contact
            </h2>

            <div className="mt-4 space-y-5">
              <div>
                <p className="text-slate-700">
                  <strong>Brian Hunt</strong>
                </p>

                <p className="text-slate-700">
                  Text: <strong>709-727-6315</strong>
                </p>
              </div>

              <div>
                <p className="text-slate-700">
                  <strong>Carla Boyd</strong>
                </p>

                <p className="text-slate-700">
                  Text: <strong>709-749-5235</strong>
                </p>
              </div>
            </div>
          </section>

        </div>
      </main>
    </>
  );
}