"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "./ui/Logo";

/**
 * Écran "Cliquez pour entrer" (cf. CLAUDE.md règle #6).
 * Le contenu de la page reste toujours présent dans le DOM en dessous —
 * ce composant n'est qu'un overlay visuel piloté par le JS, il ne conditionne
 * jamais le rendu SSR du contenu, donc l'indexation SEO n'est pas affectée.
 * Ne s'affiche qu'une fois par session (sessionStorage).
 */
export function IntroGate() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Le gate doit être visible à l'hydratation (identique au rendu SSR) pour
    // éviter un mismatch — on ne le masque qu'après coup, une fois qu'on peut
    // lire sessionStorage (API navigateur, indisponible côté serveur).
    if (sessionStorage.getItem("veya-intro-seen")) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setVisible(false);
    }
  }, []);

  useEffect(() => {
    document.body.style.overflow = visible ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  function enter() {
    try {
      sessionStorage.setItem("veya-intro-seen", "1");
    } catch {
      // stockage indisponible (navigation privée) — le gate reste éphémère, sans conséquence
    }
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="intro-gate"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-10 bg-background"
          role="dialog"
          aria-modal="true"
          aria-label="Écran d'accueil VEYA"
        >
          <Logo className="h-8 w-auto md:h-10" />
          <button
            type="button"
            onClick={enter}
            className="micro-label border border-border-strong px-8 py-4 text-foreground transition-colors hover:border-foreground"
          >
            Cliquez pour entrer
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
