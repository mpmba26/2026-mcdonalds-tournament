import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#EAF3FB] px-4">
      <div className="max-w-md rounded-2xl bg-white p-8 text-center shadow-xl">

        <h1 className="text-7xl font-black text-[#002B5C]">
          404
        </h1>

        <h2 className="mt-4 text-3xl font-bold text-[#002B5C]">
          You're Out!
        </h2>

        <p className="mt-5 text-slate-700 leading-7">
          Looks like this page has struck out or doesn't exist.
        </p>

        <p className="mt-2 text-slate-700">
          Return to the tournament home page to continue.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#002B5C] px-6 py-4 text-lg font-semibold text-white transition hover:bg-[#003B80]"
        >
          <Home size={20} />
          Back to Home
        </Link>
      </div>
    </main>
  );
}