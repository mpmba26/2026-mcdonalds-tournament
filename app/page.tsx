import Image from "next/image";
import AppHeader from "@/components/AppHeader";
import { FaFacebookF } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100">
      <AppHeader />

      {/* Main */}
      <section className="flex min-h-[70vh] items-center justify-center bg-gradient-to-b from-[#003B80] to-[#001E46] px-6 text-center text-white">
        <div>
          <Image
            src="/images/logo.png"
            alt="Mount Pearl Minor Baseball"
            width={140}
            height={140}
            className="mx-auto mb-8"
          />

          <h1 className="text-4xl font-black leading-tight md:text-6xl">
            MPMBA
            <br />
            Tournaments Page
          </h1>
        </div>
      </section>

      {/* Links */}
      <section className="mx-auto max-w-2xl px-5 py-8">
        <div className="grid gap-4 md:grid-cols-2">
          {/* Facebook */}
          <a
            href="https://www.facebook.com/mountpearlbaseball"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl bg-[#1877F2] p-6 text-white shadow-lg transition hover:scale-[1.02]"
          >
            <h2 className="flex items-center gap-2 text-xl font-bold">
              <FaFacebookF />
              Facebook
            </h2>

            <p className="mt-2 text-blue-100">
              Follow Mount Pearl Minor Baseball for news and updates.
            </p>
          </a>

          {/* Website */}
          <a
            href="https://www.mountpearlbaseball.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl bg-[#002B5C] p-6 text-white shadow-lg transition hover:scale-[1.02]"
          >
            <h2 className="text-xl font-bold">
              Mount Pearl Minor Baseball
            </h2>

            <p className="mt-2 text-blue-100">
              Visit our main website for association information.
            </p>
          </a>
        </div>
      </section>
    </main>
  );
}