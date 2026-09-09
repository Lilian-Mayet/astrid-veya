import Image from "next/image";
import Link from "next/link";

/**
 * Logo fourni par le client (PNG recadré, cf. public/logo/).
 * Variante blanche générée par inversion RGB pour usage sur fond sombre
 * (thème dominant du site) — à remplacer par un export SVG natif si fourni.
 */
export function Logo({
  theme = "white",
  className = "h-6 w-auto",
}: {
  theme?: "white" | "black";
  className?: string;
}) {
  return (
    <Link href="/" aria-label="VEYA — Retour à l'accueil" className="inline-flex">
      <Image
        src={theme === "white" ? "/logo/veya-logo-white.png" : "/logo/veya-logo-black.png"}
        alt="VEYA"
        width={732}
        height={169}
        priority
        className={className}
      />
    </Link>
  );
}
