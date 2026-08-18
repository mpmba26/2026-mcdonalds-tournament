"use client";

import AppHeader from "@/components/AppHeader";

export default function RulesPage() {
  return (
    <>
      <AppHeader title="Rules" />

      <main className="min-h-screen bg-[#EAF3FB] px-4 py-6">
        <div className="mx-auto max-w-4xl space-y-6">

          {/* 13U House League Tournament Rules */}
          <section className="rounded-2xl bg-white p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-[#002B5C]">
              13U House League Tournament Rules
            </h2>

            <p className="mt-4 text-slate-700">
              All games will be played using the{" "}
              <strong>13U House League playing rules</strong> in effect during
              the regular season, except where specific tournament rules below
              apply.
            </p>
          </section>

          {/* Pitching Rules */}
          <section className="rounded-2xl bg-white p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-[#002B5C]">
              Pitching Rules
            </h2>

            <ol className="mt-4 list-decimal space-y-3 pl-6 text-slate-700">
              <li>
                A pitcher may pitch a maximum of{" "}
                <strong>8 innings during the tournament</strong>.
              </li>

              <li>
                A pitcher may pitch a maximum of{" "}
                <strong>4 innings per game</strong>.
              </li>

              <li>
                A player may <strong>catch and then pitch</strong> in the same
                game.
              </li>

              <li>
                A player may <strong>not pitch and then catch</strong> in the
                same game.
              </li>

              <li>
                If a pitcher pitches{" "}
                <strong>any portion of an inning</strong>, that will count as{" "}
                <strong>one full inning pitched</strong> for the purposes of
                these tournament rules.
              </li>
            </ol>
          </section>

          {/* Runs Per Inning */}
          <section className="rounded-2xl bg-white p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-[#002B5C]">
              Runs Per Inning
            </h2>

            <ul className="mt-4 list-disc space-y-3 pl-6 text-slate-700">
              <li>
                There will be a <strong>3-run limit per inning</strong>.
              </li>

              <li>
                The <strong>final inning is open</strong> with no 3-run limit.
              </li>
            </ul>
          </section>

          {/* Mercy Rule */}
          <section className="rounded-2xl bg-white p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-[#002B5C]">
              Mercy Rule
            </h2>

            <p className="mt-4 text-slate-700">
              A mercy rule will be in effect:
            </p>

            <ul className="mt-4 list-disc space-y-3 pl-6 text-slate-700">
              <li>
                If a team is losing by{" "}
                <strong>10 or more runs after four (4) complete innings</strong>,
                the game will be declared complete.
              </li>

              <li>
                The game will not continue once the mercy rule has been
                reached.
              </li>
            </ul>
          </section>

          {/* Innings and Time Limit */}
          <section className="rounded-2xl bg-white p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-[#002B5C]">
              Innings and Time Limit
            </h2>

            <ul className="mt-4 list-disc space-y-3 pl-6 text-slate-700">
              <li>
                All games will be <strong>6 innings</strong>, except for time,
                see next point.
              </li>

              <li>
                A new inning will{" "}
                <strong>not be started after 1 hour and 45 minutes</strong>{" "}
                from the game start time.
              </li>

              <li>
                If an inning is already in progress when the 1 hour and 45
                minute time limit is reached, that inning will be completed.
              </li>

              <li>
                The umpire will determine when the time limit has been reached.
              </li>

              <li>
                For the Championship Game, the game will be 6 innings, no time
                limit.
              </li>
            </ul>
          </section>

          {/* Game Reporting */}
          <section className="rounded-2xl bg-white p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-[#002B5C]">
              Game Reporting
            </h2>

            <p className="mt-4 text-slate-700">
              After <strong>each game</strong>, each team must email the
              following information to{" "}
              <strong>mountpearlminorbaseball@gmail.com</strong>
            </p>

            <ul className="mt-4 list-disc space-y-3 pl-6 text-slate-700">
              <li>
                <strong>Final score</strong>
              </li>

              <li>
                <strong>
                  Names of all pitchers used and how many innings pitched each
                </strong>
              </li>
            </ul>

            <p className="mt-5 text-slate-700">
              For pitching records,{" "}
              <strong>any portion of an inning pitched counts as one full inning</strong>.
              For example, if a pitcher enters the game and pitches to only one
              batter before being replaced, that counts as{" "}
              <strong>1 inning pitched</strong>.
            </p>

            <p className="mt-4 text-slate-700">
              Teams are responsible for ensuring that the information submitted
              is accurate and is sent after each game
            </p>
          </section>

          {/* Pizza */}
          <section className="rounded-2xl bg-white p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-[#002B5C]">
              Pizza
            </h2>

            <p className="mt-4 text-slate-700">
              Pick a time during the weekend to get pizza for your team, send
              receipts for reimbursement to{" "}
              <strong>mountpearlminorbaseball@gmail.com</strong>
            </p>
          </section>

        </div>
      </main>
    </>
  );
}