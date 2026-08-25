"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import SideMenu from "./SideMenu";

interface AppHeaderProps {
  title?: string;
}

export default function AppHeader({
  title,
}: AppHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-[9999] bg-[#002B5C] text-white shadow-md">
        <div className="mx-auto flex h-16 items-center px-4">

          {/* Hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="flex h-11 w-11 items-center justify-center rounded-lg hover:bg-white/10 active:bg-white/20"
          >
            <Menu size={28} strokeWidth={2.5} />
          </button>

        </div>
      </header>

      <SideMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
    </>
  );
}