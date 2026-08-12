import Image from "next/image";
import Link from "next/link";
import AppHeader from "@/components/AppHeader";
import { CalendarDays, BookOpen } from "lucide-react";
import { FaBaseballBall } from "react-icons/fa";

export default function Home() {
  const buttons = [
    {
      icon: CalendarDays,
      title: "Schedule / Scores",
      href: "/schedule",
    },
    {
      icon: FaBaseballBall,
      title: "Pitch Tracking",
      href: "/pitch-counts",
    },
    {
      icon: BookOpen,
      title: "Rules",
      href: "/rules",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-100">
      <AppHeader />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#003B80] to-[#001E46] px-6 py-10 text-center text-white">
        <Image
          src="/images/logo.png"
          alt="Mount Pearl Minor Baseball"
          width={160}
          height={160}
          className="mx-auto mb-6"
        />

        <h1 className="text-3xl font-black leading-tight md:text-5xl">
          MPMBA 11U
          <br />
          House League Tournament
        </h1>
      </section>

      {/* Tournament Sections */}
      <section className="mx-auto max-w-4xl px-4 py-8">
        <div className="grid gap-5 md:grid-cols-3">
          {buttons.map((button) => (
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
          ))}
        </div>
      </section>

      {/* Tournament Status */}
      <section className="mx-auto max-w-4xl px-5 pb-6">
        <div className="rounded-2xl bg-green-100 p-5 shadow-lg">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-500 text-xl font-bold text-white">
              ✓
            </div>

            <div>
              <h2 className="text-lg font-bold text-green-900">
                Tournament Status
              </h2>

              <p className="mt-1 text-green-800">
                Currently no weather delays.
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
              <h3 className="flex items-center gap-2 text-xl font-bold">
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