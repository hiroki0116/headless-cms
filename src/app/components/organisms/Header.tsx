"use client";

import Logo from "../molecules/Logo";
import LanguageSwitcher from "../molecules/LanguageSwitcher";
import HamburgerMenu from "../molecules/HamburgerMenu";

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-1" />

          <div className="flex-1 flex justify-center">
            <Logo />
          </div>

          <div className="flex-1 flex justify-end items-center space-x-8">
            <div className="hidden md:flex">
              <LanguageSwitcher />
            </div>
            <div className="md:hidden">
              <HamburgerMenu />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
