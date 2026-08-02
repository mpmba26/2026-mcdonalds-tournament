"use client";

import AppHeader from "@/components/AppHeader";
import { MapPin, Navigation } from "lucide-react";

const fields = [
  {
    name: "St. Peter's Field",
    address: "100 Munden Dr, Mount Pearl, NL",
    maps: "https://www.google.com/maps/search/?api=1&query=100+Munden+Dr,+Mount+Pearl,+NL",
  },
  {
    name: "Squires Field",
    address: "Stapleton Rd, Mount Pearl, NL",
    maps: "https://www.google.com/maps/search/?api=1&query=Stapleton+Rd,+Mount+Pearl,+NL",
  },
  {
    name: "Kitty Gaul Field",
    address: "Birmingham Street, St. John's, NL",
    maps: "https://maps.app.goo.gl/TzMXWQW8vx5EaGmZ9",
  },
];

export default function MapsPage() {
  return (
    <>
      <AppHeader title="Fields" />

      <main className="min-h-screen bg-[#EAF3FB] py-6 px-4">
        <div className="mx-auto max-w-3xl">

          {/* Header Card */}
          <div className="mb-6 rounded-2xl bg-white p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-[#002B5C]">
              Tournament Field Locations
            </h2>

            <p className="mt-2 text-slate-600">
              Tap any field below to open turn-by-turn directions in Google Maps.
            </p>
          </div>

          {/* Field Cards */}
          <div className="space-y-5">
            {fields.map((field) => (
              <a
                key={field.name}
                href={field.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-[#002B5C] p-3 text-white">
                    <MapPin size={24} />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#002B5C]">
                      {field.name}
                    </h3>

                    <p className="mt-2 text-slate-600">
                      {field.address}
                    </p>

                    <div className="mt-4 inline-flex items-center gap-2 font-semibold text-[#002B5C]">
                      <Navigation size={18} />
                      Get Directions
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

        </div>
      </main>
    </>
  );
}