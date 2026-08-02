"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu } from "lucide-react";
import SideMenu from "./SideMenu";

interface AppHeaderProps {
  title?: string;
}

export default function AppHeader({
  title = "2026 MPMBA Tournament",
}: AppHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-[9999] bg-[#002B5C] text-white shadow-md">
        <div className="mx-auto flex h-16 items-center justify-between px-4">

          {/* Hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="flex h-11 w-11 items-center justify-center rounded-lg hover:bg-white/10 active:bg-white/20"
          >
            <Menu size={28} strokeWidth={2.5} />
          </button>

          {/* Logo + Title */}
          <div className="flex flex-1 items-center justify-center gap-3">
            <Image
              src="/images/logo.png"
              alt="Tournament Logo"
              width={38}
              height={38}
              priority
            />

            <h1 className="text-lg font-bold whitespace-nowrap">
              {title}
            </h1>
          </div>

          {/* Spacer to keep title centered */}
          <div className="w-11" />
        </div>
      </header>

      <SideMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
    </>
  );
}