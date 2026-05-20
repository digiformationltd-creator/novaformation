import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/nova-logo.png";
import { BRAND, NAV } from "@/lib/brand";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <img src={logo} alt={BRAND.name} width={36} height={36} className="rounded-full" />
          <span className="font-display text-base sm:text-lg tracking-wide">
            <span className="text-gold-gradient font-semibold">Nova</span>{" "}
            <span className="text-silver-gradient">Formation</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              activeProps={{ className: "px-3 py-2 text-sm text-foreground" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="relative inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gold-gradient text-primary-foreground font-medium text-sm shadow-gold hover:scale-[1.03] transition-transform"
          >
            Get Started
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 text-foreground"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl">
          <div className="px-4 py-3 flex flex-col">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-3 text-sm text-muted-foreground hover:text-foreground border-b border-border/30"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 text-center px-5 py-3 rounded-full bg-gold-gradient text-primary-foreground font-medium text-sm"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
