import { Link } from "@tanstack/react-router";
import { Mail, Phone, MessageCircle, Globe } from "lucide-react";
import logo from "@/assets/nova-logo.png";
import { BRAND } from "@/lib/brand";

export function Footer() {
  return (
    <footer className="relative border-t border-border/50 bg-card/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 grid gap-10 md:grid-cols-4">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <img src={logo} alt="" width={40} height={40} loading="lazy" className="rounded-full" />
            <span className="font-display text-lg">
              <span className="text-gold-gradient font-semibold">Nova</span>{" "}
              <span className="text-silver-gradient">Formation</span>
            </span>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs">
            {BRAND.tagline}. UK & US company formation, banking and compliance for global founders.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4 text-silver-gradient">Services</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/uk-services" className="hover:text-foreground">UK LTD Formation</Link></li>
            <li><Link to="/usa-services" className="hover:text-foreground">US LLC Formation</Link></li>
            <li><Link to="/banking" className="hover:text-foreground">Business Banking</Link></li>
            <li><Link to="/web-development" className="hover:text-foreground">Web Development</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4 text-silver-gradient">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/pricing" className="hover:text-foreground">Pricing</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4 text-silver-gradient">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Phone size={14} className="text-gold" />
              <a href={`tel:${BRAND.phoneIntl}`} className="hover:text-foreground">{BRAND.phone}</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={14} className="text-gold" />
              <a href={`mailto:${BRAND.email}`} className="hover:text-foreground break-all">{BRAND.email}</a>
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle size={14} className="text-gold" />
              <a href={BRAND.whatsapp} target="_blank" rel="noopener" className="hover:text-foreground">WhatsApp</a>
            </li>
            <li className="flex items-center gap-2">
              <Globe size={14} className="text-gold" />
              <a href={BRAND.facebook} target="_blank" rel="noopener" className="hover:text-foreground">Nova Formation Ltd</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/50 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Nova Formation Ltd. All rights reserved.
      </div>
    </footer>
  );
}
