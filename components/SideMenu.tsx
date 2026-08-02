"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  X,
  House,
  CalendarDays,
  Trophy,
  MapPinned,
  BookOpen,
  Camera,
} from "lucide-react";
import { FaBaseballBall } from "react-icons/fa";

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SideMenu({
  isOpen,
  onClose,
}: SideMenuProps) {
  const pathname = usePathname();

  const menuItems = [
    { title: "Home", href: "/", icon: House },
    { title: "Schedule", href: "/schedule", icon: CalendarDays },
    { title: "Live Scores", href: "/scores", icon: Trophy },
    { title: "Pitch Counts", href: "/pitch-counts", icon: FaBaseballBall },
    { title: "Fields", href: "/maps", icon: MapPinned },
    { title: "Rules", href: "/rules", icon: BookOpen },
    { title: "Photos", href: "/photos", icon: Camera },
  ];

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Menu */}
      <aside
        className={`fixed left-0 top-0 z-50 flex h-full w-72 flex-col bg-white shadow-2xl transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="border-b p-5">

          <div className="mb-4 flex items-center justify-between">

            <div className="flex items-center gap-3">

              <Image
                src="/images/logo.png"
                alt="Tournament Logo"
                width={44}
                height={44}
              />

              <div>
                <h2 className="text-lg font-bold text-[#002B5C]">
                  2026 MPMBA
                </h2>

                <p className="text-sm text-slate-600">
                  McDonald's Tournament
                </p>
              </div>

            </div>

            <button onClick={onClose}>
              <X size={28} />
            </button>

          </div>

        </div>

        {/* Navigation */}
        <nav className="flex-1">

          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={`flex items-center gap-4 px-6 py-4 text-lg font-medium transition-all ${
                pathname === item.href
                  ? "bg-[#002B5C] text-white"
                  : "text-slate-800 hover:bg-slate-100"
              }`}
            >
              <item.icon
                size={22}
                className={
                  pathname === item.href
                    ? "text-white"
                    : "text-[#002B5C]"
                }
              />

              {item.title}
            </Link>
          ))}

        </nav>

        {/* Footer */}
        <div className="border-t p-4 text-center text-xs text-slate-500">
          Version 1.0
        </div>
      </aside>
    </>
  );
}