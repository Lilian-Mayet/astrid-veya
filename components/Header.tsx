"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "./ui/Logo";
import { primaryNav, ctaBooking, cures } from "@/lib/site-config";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [curesOpen, setCuresOpen] = useState(false);
  const [mobileCuresOpen, setMobileCuresOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <Logo className="h-6 w-auto md:h-7" />

        <nav className="hidden items-center gap-10 lg:flex" aria-label="Navigation principale">
          {primaryNav.map((item) =>
            "children" in item ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setCuresOpen(true)}
                onMouseLeave={() => setCuresOpen(false)}
              >
                <Link
                  href={item.href}
                  className="micro-label text-foreground transition-colors hover:text-foreground-muted"
                  aria-expanded={curesOpen}
                >
                  {item.label}
                </Link>
                <AnimatePresence>
                  {curesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-0 top-full flex min-w-56 flex-col gap-3 border border-border bg-surface p-6"
                    >
                      {item.children.map((cure) => (
                        <Link
                          key={cure.slug}
                          href={`/cures/${cure.slug}`}
                          className="font-serif text-lg italic text-foreground hover:text-foreground-muted"
                        >
                          {cure.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="micro-label text-foreground transition-colors hover:text-foreground-muted"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden lg:block">
          <Link
            href={ctaBooking.href}
            className="micro-label border border-border-strong px-5 py-3 text-foreground transition-colors hover:border-foreground"
          >
            {ctaBooking.label}
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          className="micro-label flex items-center gap-2 lg:hidden"
          aria-label="Ouvrir le menu"
        >
          Menu
        </button>
      </div>
      </header>

      {/* Rendu hors du <header> : le backdrop-blur du header crée un containing
          block pour ses descendants en `fixed`, ce qui casserait le plein écran
          de cet overlay s'il restait imbriqué à l'intérieur. */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex flex-col bg-background"
          >
            <div className="flex items-center justify-between px-6 py-4">
              <Logo className="h-6 w-auto" />
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="micro-label"
                aria-label="Fermer le menu"
              >
                Fermer
              </button>
            </div>

            <nav className="flex flex-1 flex-col justify-center gap-8 px-8" aria-label="Navigation mobile">
              {primaryNav.map((item) =>
                "children" in item ? (
                  <div key={item.label}>
                    <button
                      type="button"
                      onClick={() => setMobileCuresOpen((v) => !v)}
                      className="flex w-full items-center justify-between font-serif text-3xl italic text-foreground"
                      aria-expanded={mobileCuresOpen}
                    >
                      {item.label}
                      <span className="text-lg">{mobileCuresOpen ? "−" : "+"}</span>
                    </button>
                    <AnimatePresence>
                      {mobileCuresOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-4 flex flex-col gap-4 pl-4">
                            {cures.map((cure) => (
                              <Link
                                key={cure.slug}
                                href={`/cures/${cure.slug}`}
                                onClick={() => setMobileOpen(false)}
                                className="font-sans text-base text-foreground-muted"
                              >
                                {cure.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-serif text-3xl italic text-foreground"
                  >
                    {item.label}
                  </Link>
                )
              )}

              <Link
                href={ctaBooking.href}
                onClick={() => setMobileOpen(false)}
                className="micro-label mt-4 border border-border-strong px-5 py-4 text-center text-foreground"
              >
                {ctaBooking.label}
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
