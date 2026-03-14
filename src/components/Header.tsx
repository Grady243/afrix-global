"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Accueil", href: "/" },
  {label: "A propos", href: "/apropos" },
  { label: "Equipe", href: "/equipe" },
  { label: "Services", href: "/services" },
  { label: "Formations", href: "/formations" },
  { label: "Blog", href: "/blogs" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full h-20 bg-afrix-dark/90 backdrop-blur-md border-b border-white/10 z-50">
      <div className="container mx-auto h-full px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="shrink-0">
          <Image
            src="/afrix.png"
            alt="Afrix Global Logo"
            width={140}
            height={16}
            className="object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-white/90 hover:text-afrix-blue transition-colors text-sm font-normal"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Button className="hidden lg:inline-flex rounded-full bg-afrix-blue text-white hover:bg-afrix-blue px-7 py-5 text-sm font-medium">
          Inscrivez-vous
        </Button>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="absolute top-full left-0 right-0 bg-afrix-dark/95 backdrop-blur-md border-t border-white/10 p-6 flex flex-col gap-4 lg:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-white/90 hover:text-afrix-blue transition-colors text-base py-2"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button className="rounded-full bg-afrix-blue text-white hover:bg-afrix-blue mt-2">
              Inscrivez-vous
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
