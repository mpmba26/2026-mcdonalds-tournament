"use client";

import AppHeader from "@/components/AppHeader";
import { Camera, Hash } from "lucide-react";
import { FaFacebookF } from "react-icons/fa";

export default function PhotosPage() {
  return (
    <>
      <AppHeader title="Photos" />

      <main className="min-h-screen bg-[#EAF3FB] py-6 px-4">
        <div className="mx-auto max-w-3xl space-y-6">

          {/* Header */}
          <section className="rounded-2xl bg-white p-8 text-center shadow-lg">
            <Camera
              size={56}
              className="mx-auto mb-4 text-[#002B5C]"
            />

            <h1 className="text-3xl font-bold text-[#002B5C]">
              Tournament Photos
            </h1>

            <p className="mt-5 leading-7 text-slate-700">
              Capture the excitement of tournament weekend and share your
              favourite moments with everyone. Whether it's an amazing play,
              team celebration, championship game, or cheering fans, we'd love
              to see your photos.
            </p>
          </section>

          {/* Share Photos */}
          <section className="rounded-2xl bg-white p-8 shadow-lg">
            <div className="flex items-center gap-3">
              <Hash size={28} className="text-[#002B5C]" />

              <h2 className="text-2xl font-bold text-[#002B5C]">
                Share Your Photos
              </h2>
            </div>

            <p className="mt-5 text-slate-700">
              Share your tournament photos on Facebook and include our official
              tournament hashtag so everyone can enjoy the memories.
            </p>

            <div className="mt-8 rounded-2xl bg-[#002B5C] p-8 text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-200">
                Official Tournament Hashtag
              </p>

              <h3 className="mt-3 break-all text-4xl font-black text-white">
                #MPMcDonalds2026
              </h3>
            </div>

            <p className="mt-6 text-slate-700">
              We'll be following the hashtag throughout the weekend and may
              feature some of our favourite photos on the Mount Pearl Minor
              Baseball Facebook page.
            </p>
          </section>

          {/* Facebook */}
          <section className="rounded-2xl bg-white p-8 shadow-lg">
            <div className="flex items-center gap-3">
              <FaFacebookF
                size={24}
                className="text-[#1877F2]"
              />

              <h2 className="text-2xl font-bold text-[#002B5C]">
                Follow Mount Pearl Minor Baseball
              </h2>
            </div>

            <p className="mt-5 text-slate-700">
              Follow us throughout tournament weekend for photos, highlights,
              scores, announcements, and more. We'll also be sharing some of
              the great photos posted using{" "}
              <span className="font-bold text-[#002B5C]">
                #MPMcDonalds2026
              </span>.
            </p>

            <a
              href="https://www.facebook.com/mountpearlbaseball"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#1877F2] px-6 py-4 text-lg font-semibold text-white transition hover:bg-[#166FE5]"
            >
              <FaFacebookF size={18} />
              Visit Our Facebook Page
            </a>
          </section>

        </div>
      </main>
    </>
  );
}