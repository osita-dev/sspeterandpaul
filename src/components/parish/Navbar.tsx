import { useState } from "react";
import { Menu, X, Radio } from "lucide-react";

const navLinks = [
  { label: "Mass Times", href: "#hero" },
  { label: "Readings", href: "#readings" },
  { label: "Announcements", href: "#announcements" },
  { label: "Watch Live", href: "#livestream" },
  { label: "Prayer", href: "#prayer" },
  { label: "Ministries", href: "#ministries" },
  { label: "Events", href: "#events" },
  { label: "Contact", href: "#contact" },
];

interface NavbarProps {
  isLive?: boolean;
}

export function Navbar({ isLive = true }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-rose-900 flex items-center justify-center">
              <span className="text-white font-bold text-sm">✝</span>
            </div>
            <div className="hidden sm:block">
              <p className="font-semibold text-zinc-800 text-sm leading-tight">
                SS Peter & Paul
              </p>
              <p className="text-xs text-zinc-500">Catholic Church, Shomolu</p>
            </div>
          </a>

          {/* Live Badge */}
          {isLive && (
            <a
              href="#livestream"
              className="flex items-center gap-1.5 px-3 py-1.5 bg-red-600 text-white text-xs font-semibold rounded-full animate-pulse-soft"
            >
              <Radio className="w-3 h-3" />
              LIVE NOW
            </a>
          )}

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.slice(0, 6).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-zinc-600 hover:text-rose-900 transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#donate"
              className="px-4 py-2 bg-amber-500 text-white text-sm font-semibold rounded-lg hover:bg-amber-600 transition-colors"
            >
              Donate
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-zinc-600"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden py-4 border-t border-zinc-100 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-zinc-700 hover:bg-stone-50 rounded-lg font-medium"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
