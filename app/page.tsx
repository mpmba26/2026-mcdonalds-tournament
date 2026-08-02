import Image from "next/image";
import Link from "next/link";
import AppHeader from "@/components/AppHeader";

import {
  CalendarDays,
  Trophy,
  MapPinned,
  BookOpen,
  Camera,
  Globe,
} from "lucide-react";

import { FaBaseballBall, FaFacebookF } from "react-icons/fa";

export default function Home() {
  const buttons = [
    { icon: CalendarDays, title: "Schedule", href: "/schedule" },
    { icon: Trophy, title: "Live Scores", href: "/scores" },
    { icon: FaBaseballBall, title: "Pitch Counts", href: "/pitch-counts" },
    { icon: MapPinned, title: "Fields", href: "/maps" },
    { icon: BookOpen, title: "Rules", href: "/rules" },
    { icon: Camera, title: "Photos", href: "/photos" },
  ];

  return (
    <main className="min-h-screen bg-slate-100">
      {/* Header */}
      <AppHeader />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#003B80] to-[#001E46] px-6 py-10 text-center text-white">
        <Image
          src="/images/logo.png"
          alt="Tournament Logo"
          width={120}
          height={120}
          className="mx-auto mb-6"
        />

        <h1 className="text-2xl font-black leading-tight md:text-5xl">
          2026 MPMBA
          <br />
          McDonald's Tournament
        </h1>

        <p className="mt-3 text-xl text-blue-200">
          August 7–9, 2026
        </p>

        {/* Title Sponsor */}
        <div className="mx-auto mt-8 max-w-md rounded-2xl bg-white p-5 shadow-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D62828]">
            Thank You to Our Title Sponsor
          </p>

          <h2 className="mt-3 text-2xl font-extrabold text-[#002B5C]">
            Freedom Foods McDonald's
          </h2>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="mx-auto max-w-md px-4 py-6">
        <div className="grid grid-cols-2 gap-4">
          {buttons.map((button) => (
            <Link
              key={button.title}
              href={button.href}
              className="flex aspect-square flex-col items-center justify-center rounded-2xl bg-white p-6 shadow-lg transition hover:scale-105 hover:shadow-xl active:scale-95"
            >
              <button.icon
                size={48}
                strokeWidth={2}
                className="text-[#002B5C]"
              />

              <h2 className="mt-3 text-center text-lg font-bold text-[#002B5C]">
                {button.title}
              </h2>
            </Link>
          ))}
        </div>
      </section>

      {/* Tournament Updates */}
      <section className="mx-auto max-w-6xl px-5 py-3">
        <div className="rounded-2xl bg-white p-6 shadow-lg">
          <h2 className="mb-5 text-2xl font-bold text-[#002B5C]">
            📢 Tournament Updates
          </h2>

          <div className="rounded-xl border border-green-200 bg-green-50 p-4">
            <p className="font-semibold text-green-800">
              No updates at this time.
            </p>

            <p className="mt-2 text-sm text-green-700">
              Check back during the tournament for weather updates, schedule
              changes, and important announcements.
            </p>
          </div>
        </div>
      </section>

      {/* Stay Connected */}
      <section className="mx-auto max-w-6xl px-5 py-3 pb-10">
        <div className="rounded-2xl bg-white p-6 shadow-lg">
          <h2 className="mb-5 text-2xl font-bold text-[#002B5C]">
            🌐 Stay Connected
          </h2>

          <p className="mb-6 text-slate-700">
            Follow Mount Pearl Minor Baseball throughout the tournament for
            photos, scores, highlights, announcements, and more.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/mountpearlbaseball"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-[#1877F2] p-5 text-white shadow-md transition hover:scale-[1.02] hover:shadow-xl"
            >
              <h3 className="flex items-center gap-2 text-xl font-bold">
                <FaFacebookF />
                Facebook
              </h3>

              <p className="mt-2 text-blue-100">
                Tournament photos, scores, highlights, announcements, and live
                updates throughout the weekend.
              </p>
            </a>

            {/* Website */}
            <a
              href="https://www.mountpearlbaseball.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-[#002B5C] p-5 text-white shadow-md transition hover:scale-[1.02] hover:shadow-xl"
            >
              <h3 className="flex items-center gap-2 text-xl font-bold">
                <Globe size={22} />
                Website
              </h3>

              <p className="mt-2 text-blue-100">
                Visit the Mount Pearl Minor Baseball website for association
                news, registration information, programs, and more.
              </p>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}