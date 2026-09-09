import Link from "next/link";
import { Logo } from "./ui/Logo";
import { cures, siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <Logo className="h-6 w-auto" />
          </div>

          <div>
            <p className="micro-label mb-4">Cures</p>
            <ul className="flex flex-col gap-3">
              {cures.map((cure) => (
                <li key={cure.slug}>
                  <Link
                    href={`/cures/${cure.slug}`}
                    className="font-sans text-sm text-foreground-muted transition-colors hover:text-foreground"
                  >
                    {cure.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="micro-label mb-4">Navigation</p>
            <ul className="flex flex-col gap-3">
              {[
                { label: "Philosophie", href: "/philosophie" },
                { label: "ADN", href: "/adn" },
                { label: "Portfolio", href: "/portfolio" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-foreground-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="micro-label mb-4">Contact</p>
            <ul className="flex flex-col gap-3 font-sans text-sm text-foreground-muted">
              <li>
                <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-foreground">
                  {siteConfig.email}
                </a>
              </li>
              {siteConfig.social.map((s) => (
                <li key={s.label}>
                  <a href={s.href} className="transition-colors hover:text-foreground">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-border pt-8 text-xs text-foreground-muted md:flex-row md:items-center md:justify-between">
          <p>{siteConfig.office}</p>
          <div className="flex gap-6">
            {siteConfig.legal.map((l) => (
              <Link key={l.href} href={l.href} className="transition-colors hover:text-foreground">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
