import Image from "next/image";
import Link from "next/link";
import AppHeader from "@/components/AppHeader";
import { CalendarDays, Trophy, BookOpen } from "lucide-react";
import { FaBaseballBall } from "react-icons/fa";

export default function Home() {
  const buttons = [
    {
      icon: CalendarDays,
      title: "Schedule",
      href: "https://drive.google.com/file/d/1aAblNIl7_6p5gLDfBxB0pqucSO-L8fyI/view?usp=sharing",
      external: true,
    },
    {
      icon: Trophy,
      title: "Scores",
      href: "/scores",
      external: false,
    },
    {
      icon: FaBaseballBall,
      title: "Pitch Tracking",
      href: "/pitch-counts",
      external: false,
    },
    {
      icon: BookOpen,
      title: "Rules",
      href: "https://baseballnl.com/article/76482",
      external: true,
    },
  ];

  return (
    <main className="min-h-screen bg-slate-100">
      <AppHeader />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#003B80] to-[#001E46] px-6 py-10 text-center text-white">
        <Image
          src="/images/BNL_Provincials_Logo_Color_2026.png"
          alt="2026 Baseball NL Provincial Championships"
          width={360}
          height={360}
          className="mx-auto mb-6 h-auto w-[280px] md:w-[360px]"
          priority
        />

        <h1 className="text-3xl font-black leading-tight md:text-5xl">
          15U AAA
          <br />
          BNL Provincial Tournament
        </h1>

        <p className="mt-4 text-xl font-semibold text-white">
          Hosted by Mount Pearl Minor Baseball
        </p>

        <p className="mt-2 text-xl text-blue-200">
          September 4–6, 2026
        </p>

        {/* Participating Teams */}
        <div className="mx-auto mt-6 flex max-w-3xl items-center justify-center gap-2 sm:gap-4 md:gap-8">
          <Image
            src="/images/Raiders.png"
            alt="Raiders"
            width={90}
            height={90}
            className="h-14 w-14 object-contain sm:h-20 sm:w-20 md:h-24 md:w-24"
          />

          <Image
            src="/images/Phanthoms.png"
            alt="Phantoms"
            width={90}
            height={90}
            className="h-14 w-14 object-contain sm:h-20 sm:w-20 md:h-24 md:w-24"
          />

          <Image
            src="/images/Blazers.png"
            alt="Blazers"
            width={90}
            height={90}
            className="h-14 w-14 object-contain sm:h-20 sm:w-20 md:h-24 md:w-24"
          />

          <Image
            src="/images/Pirates.png"
            alt="Pirates"
            width={90}
            height={90}
            className="h-14 w-14 object-contain sm:h-20 sm:w-20 md:h-24 md:w-24"
          />

          <Image
            src="/images/Caps.png"
            alt="Caps"
            width={90}
            height={90}
            className="h-14 w-14 object-contain sm:h-20 sm:w-20 md:h-24 md:w-24"
          />
        </div>
      </section>

      {/* Tournament Sections */}
      <section className="mx-auto max-w-4xl px-4 py-8">
        <div className="grid gap-5 sm:grid-cols-2">
          {buttons.map((button) =>
            button.external ? (
              <a
                key={button.title}
                href={button.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[180px] flex-col items-center justify-center rounded-2xl bg-white p-6 text-center shadow-lg transition hover:scale-[1.02] active:scale-95"
              >
                <button.icon
                  size={52}
                  strokeWidth={2}
                  className="text-[#002B5C]"
                />

                <h2 className="mt-4 text-xl font-bold text-[#002B5C]">
                  {button.title}
                </h2>
              </a>
            ) : (
              <Link
                key={button.title}
                href={button.href}
                className="flex min-h-[180px] flex-col items-center justify-center rounded-2xl bg-white p-6 text-center shadow-lg transition hover:scale-[1.02] active:scale-95"
              >
                <button.icon
                  size={52}
                  strokeWidth={2}
                  className="text-[#002B5C]"
                />

                <h2 className="mt-4 text-xl font-bold text-[#002B5C]">
                  {button.title}
                </h2>
              </Link>
            )
          )}
        </div>
      </section>

      {/* Tournament Update */}
      <section className="mx-auto max-w-4xl px-5 pb-6">
        <div className="rounded-2xl bg-amber-100 p-5 shadow-lg">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-500 text-xl font-bold text-white">
              !
            </div>

            <div>
              <h2 className="text-lg font-bold text-amber-900">
                Tournament Update
              </h2>

              <p className="mt-1 text-amber-800">
                There have been changes to the schedule for Saturday.
                Please check the Schedule and GameChanger for the most
                up-to-date game times and information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Association Links */}
      <section className="mx-auto max-w-4xl px-5 pb-10">
        <div className="rounded-2xl bg-white p-6 shadow-lg">
          <h2 className="mb-5 text-2xl font-bold text-[#002B5C]">
            Mount Pearl Minor Baseball
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            <a
              href="https://www.facebook.com/mountpearlbaseball"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-[#1877F2] p-5 text-white transition hover:scale-[1.02]"
            >
              <h3 className="text-xl font-bold">
                Facebook
              </h3>

              <p className="mt-2 text-blue-100">
                Follow Mount Pearl Minor Baseball for updates and information.
              </p>
            </a>

            <a
              href="https://www.mountpearlbaseball.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-[#002B5C] p-5 text-white transition hover:scale-[1.02]"
            >
              <h3 className="text-xl font-bold">
                Mount Pearl Minor Baseball Website
              </h3>

              <p className="mt-2 text-blue-100">
                Visit the association website for more information.
              </p>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}