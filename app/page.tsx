import {
  ArrowRight,
  Award,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  Factory,
  Leaf,
  MapPinned,
  PackageCheck,
  Ruler,
  ShieldCheck,
  Truck
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Chrome } from "./components/Chrome";
import { CountUp } from "./components/CountUp";

const values: { title: string; text: string; Icon: LucideIcon }[] = [
  { title: "Qualité contrôlée", text: "Production suivie, conformité export et exigences internationales.", Icon: Award },
  { title: "Délais maîtrisés", text: "Stock de sécurité et centres de montage pour livraisons rapides.", Icon: Clock },
  { title: "Bois responsable", text: "Emballages majoritairement constitués de bois et démarche durable.", Icon: Leaf },
  { title: "Traçabilité", text: "Marquage, suivi des intrants et traitement conforme NIMP 15.", Icon: ShieldCheck }
];

const clients = ["NESTLÉ", "PAPREC", "CMCP", "AGRISOUSS", "SOTHEMA", "COOPÉRATIVE ZAOUIA"];

const stats = [
  { value: 20, suffix: "M", label: "emballages produits par an" },
  { value: 600, suffix: "K", label: "palettes produites par an" },
  { value: 4, suffix: " ha", label: "unité principale à M'Harza Sahel" }
];

const programs: { title: string; text: string; image: string; Icon: LucideIcon; href: string }[] = [
  {
    title: "Emballages bois",
    text: "Solutions légères pour fruits, légumes et exportation agricole.",
    image: "/mafibramaroc/emballage.jpg",
    Icon: PackageCheck,
    href: "/nos-produits"
  },
  {
    title: "Palettes industrielles",
    text: "Palettes standards ou adaptées aux besoins de manutention.",
    image: "/mafibramaroc/palette-1.jpg",
    Icon: Truck,
    href: "/nos-produits"
  },
  {
    title: "Fabrication sur mesure",
    text: "Étude technique, production, marquage et livraison rapide.",
    image: "/mafibramaroc/prod.jpg",
    Icon: Factory,
    href: "/societe"
  }
];

const process = [
  ["01", "Étude du besoin", "Analyse technique selon produit, charge, transport et destination."],
  ["02", "Production bois", "Fabrication, assemblage, marquage et contrôle des produits."],
  ["03", "Traçabilité", "Traitement NIMP 15, code de suivi et conformité export."],
  ["04", "Livraison", "Stock de sécurité et organisation réactive sur le territoire national."]
];

const assurances = ["NIMP 15", "Traçabilité", "Marquage personnalisé", "Livraison rapide"];

const capabilities: { title: string; text: string; Icon: LucideIcon }[] = [
  { title: "Export fruits et légumes", text: "Emballages légers conçus pour les contraintes de l'export agricole.", Icon: PackageCheck },
  { title: "Usage industriel", text: "Palettes, palox et emballages adaptés aux pièces lourdes ou encombrantes.", Icon: Factory },
  { title: "Couverture nationale", text: "Unité principale et centres de montage pour servir plusieurs régions.", Icon: MapPinned },
  { title: "Conformité documentaire", text: "Certificats, traçabilité et traitement bois pour les expéditions.", Icon: ClipboardCheck }
];

export default function Home() {
  return (
    <Chrome>
      <main>
        <section className="home-hero">
          <div className="wrap home-hero__grid">
            <div className="home-hero__content" data-reveal>
              <span className="eyebrow">Fabrication bois pour export et industrie</span>
              <h1>Emballages bois et palettes industrielles prêts pour vos flux professionnels.</h1>
              <p>
                MAFIBRA produit, marque et livre des solutions bois conformes pour l'export agricole,
                la manutention et les besoins industriels au Maroc.
              </p>
              <div className="assurance-list">
                {assurances.map((item) => (
                  <span key={item}><CheckCircle2 size={16} /> {item}</span>
                ))}
              </div>
              <div className="hero-actions">
                <a className="button button--primary" href="/nos-produits">Découvrir nos produits <ArrowRight size={17} /></a>
                <a className="button button--ghost" href="/contact">Nous contacter</a>
              </div>
            </div>
            <div className="home-hero__media" data-reveal>
              <div className="hero-photo hero-photo--main">
                <img src="/mafibramaroc/prod.jpg" alt="Unité de production Mafibra" />
              </div>
              <div className="hero-photo hero-photo--small">
                <img src="/mafibramaroc/palette-1.jpg" alt="Palettes bois Mafibra" />
              </div>
              <div className="hero-card">
                <Ruler size={22} />
                <strong>Production contrôlée</strong>
                <span>Bois traité, traçabilité et conformité export.</span>
              </div>
            </div>
          </div>
        </section>

        <section className="stats-band">
          <div className="wrap stats-grid" data-reveal>
            {stats.map((stat) => (
              <article key={stat.label}>
                <strong><CountUp value={stat.value} suffix={stat.suffix} /></strong>
                <span>{stat.label}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="proof-section">
          <div className="wrap proof-grid">
            {values.map(({ title, text, Icon }) => (
              <article key={title} data-reveal>
                <Icon size={26} />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="wrap intro-line" data-reveal>
          <span className="section-kicker">Notre chaîne de valeur</span>
          <h2>
            <strong>De l'achat de la matière première à la livraison,</strong> MAFIBRA maîtrise la production, le marquage,
            le montage et la distribution de ses emballages bois.
          </h2>
          <a className="button button--primary" href="/societe">En savoir plus <ArrowRight size={17} /></a>
        </section>

        <section className="capability-section">
          <div className="wrap section-heading" data-reveal>
            <span className="section-kicker">Expertise Mafibra</span>
            <h2>Une offre pensée pour les décideurs achat, logistique et production.</h2>
          </div>
          <div className="wrap capability-grid">
            {capabilities.map(({ title, text, Icon }) => (
              <article key={title} data-reveal>
                <Icon size={26} />
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="program-section">
          <div className="wrap section-heading" data-reveal>
            <span className="section-kicker">Nos solutions</span>
            <h2>Des produits adaptés aux exigences de l'export et de l'industrie.</h2>
          </div>
          <div className="wrap program-grid">
            {programs.map(({ title, text, image, Icon, href }) => (
              <article key={title} data-reveal>
                <img src={image} alt={title} />
                <div className="program-card__body">
                  <Icon size={24} />
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <a href={href}>Découvrir <ArrowRight size={16} /></a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="process-section">
          <div className="wrap process-grid">
            <div className="process-heading" data-reveal>
              <span className="section-kicker">Méthode de travail</span>
              <h2>Un processus clair, pensé pour les contraintes industrielles.</h2>
              <p>MAFIBRA couvre les étapes essentielles, depuis la définition du besoin jusqu'à la livraison des produits finis.</p>
            </div>
            <div className="process-list">
              {process.map(([number, title, text]) => (
                <article key={number} data-reveal>
                  <span>{number}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="eco-band">
          <div className="eco-band__bg" />
          <div className="wrap eco-band__content">
            <div data-reveal>
              <span className="section-kicker">Développement durable</span>
              <h2>Une entreprise écologique et responsable</h2>
              <p>Nos emballages sont constitués majoritairement de bois et s'inscrivent dans une démarche responsable.</p>
              <a className="button button--ghost" href="/developpement-durable">Voir nos engagements <ArrowRight size={17} /></a>
            </div>
            <img src="/mafibramaroc/nimp.jpg" alt="Certification NIMP 15" data-reveal />
          </div>
        </section>

        <section className="wrap clients">
          <span className="section-kicker" data-reveal>Références</span>
          <h2 data-reveal>Ils nous font confiance</h2>
          <div className="client-grid" data-reveal>
            {clients.map((client) => (
              <span key={client}>{client}</span>
            ))}
          </div>
          <div className="final-cta" data-reveal>
            <div>
              <span className="section-kicker">Projet B2B</span>
              <h2>Besoin d'un emballage bois ou d'une palette adaptée ?</h2>
              <p>Contactez MAFIBRA pour préciser vos volumes, dimensions, délais et exigences export.</p>
            </div>
            <a className="button button--primary" href="/devis">Démarrer une demande <ArrowRight size={17} /></a>
          </div>
        </section>
      </main>
    </Chrome>
  );
}
