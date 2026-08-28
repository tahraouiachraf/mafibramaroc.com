"use client";

import { Menu, Search, X } from "lucide-react";
import { useEffect, useState } from "react";

const menuItems = [
  ["Accueil", "/"],
  ["Société", "/societe"],
  ["Nos produits", "/nos-produits"],
  ["Distribution", "/distribution"],
  ["Nos clients", "/nos-clients"],
  ["Développement durable", "/developpement-durable"],
  ["Contact", "/contact"]
];

export function Chrome({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

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
          <span>+212 523 35 63 81</span>
          <a href="mailto:direction@mafibra.ma">direction@mafibra.ma</a>
          <span className="socials">Facebook&nbsp;&nbsp;Twitter&nbsp;&nbsp;Google+</span>
        </div>
      </div>

      <header className="site-header">
        <div className="wrap header-inner">
          <a className="brand" href="/" aria-label="Mafibramaroc.com">
            <img src="/mafibramaroc/mafibra.png" alt="Mafibramaroc.com" />
          </a>

          <nav className={open ? "main-nav main-nav--open" : "main-nav"} aria-label="Navigation principale">
            {menuItems.map(([label, href]) => (
              <a href={href} key={href} onClick={() => setOpen(false)}>
                {label}
              </a>
            ))}
          </nav>

          <button className="search-button" type="button" aria-label="Recherche">
            <Search size={18} />
          </button>

          <button className="menu-button" type="button" onClick={() => setOpen((value) => !value)} aria-label="Menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {children}

      <footer className="footer">
        <div className="wrap footer-inner">
          <span>Copyright 2017 Mafibra</span>
          <nav>
            <a href="/">Accueil</a>
            <a href="/recrutement">Recrutement</a>
            <a href="/contact">Contact</a>
          </nav>
        </div>
      </footer>
    </>
  );
}
