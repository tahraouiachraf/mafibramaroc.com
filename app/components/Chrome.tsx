"use client";

import { Facebook, Mail, MapPin, Menu, Phone, Search, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const menuItems = [
  ["Accueil", "/"],
  ["Société", "/societe"],
  ["Nos produits", "/nos-produits"],
  ["Distribution", "/distribution"],
  ["Nos clients", "/nos-clients"],
  ["Développement durable", "/developpement-durable"],
  ["Contact", "/contact"],
  ["Devis", "/devis"]
];

export function Chrome({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="top-line">
        <div className="wrap top-line__inner">
          <a href="tel:+212523356381"><Phone size={14} /> +212 523 35 63 81</a>
          <a href="mailto:direction@mafibra.ma"><Mail size={14} /> direction@mafibra.ma</a>
          <span><MapPin size={14} /> M'Harza Essahel - Bir Jdid</span>
          <span className="socials"><Facebook size={14} /> Mafibra Maroc</span>
        </div>
      </div>

      <header className="site-header">
        <div className="wrap header-inner">
          <a className="brand" href="/" aria-label="Mafibramaroc.com">
            <img src="/mafibramaroc/mafibra.png" alt="Mafibramaroc.com" />
          </a>

          <nav id="main-navigation" className={open ? "main-nav main-nav--open" : "main-nav"} aria-label="Navigation principale">
            {menuItems.map(([label, href]) => (
              <a
                className={pathname === href ? "is-active" : ""}
                href={href}
                key={href}
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            ))}
          </nav>

          <button className="search-button" type="button" aria-label="Recherche">
            <Search size={18} />
          </button>

          <button className="menu-button" type="button" onClick={() => setOpen((value) => !value)} aria-label={open ? "Fermer le menu" : "Ouvrir le menu"} aria-expanded={open} aria-controls="main-navigation">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>

          <a className="header-cta" href="/devis">Demander un devis</a>
        </div>
      </header>

      {children}

      <footer className="footer">
        <div className="wrap footer-grid">
          <div>
            <img src="/mafibramaroc/mafibra.png" alt="Mafibra" />
            <p>Fabrication d'emballages et palettes bois pour l'export agricole et l'industrie au Maroc.</p>
          </div>
          <nav>
            <h3>Navigation</h3>
            <a href="/">Accueil</a>
            <a href="/societe">Société</a>
            <a href="/nos-produits">Nos produits</a>
            <a href="/devis">Demande de devis</a>
            <a href="/contact">Contact</a>
          </nav>
          <div>
            <h3>Contact</h3>
            <p>Route côtière d&apos;Azemmour km 53.4</p>
            <p><a href="mailto:direction@mafibra.ma">direction@mafibra.ma</a></p>
            <p><a href="tel:+212523356381">+212 523 35 63 81</a></p>
          </div>
        </div>
        <div className="wrap footer-bottom">
          <span>Copyright 2017 Mafibra</span>
          <a href="/recrutement">Recrutement</a>
        </div>
      </footer>
    </>
  );
}
