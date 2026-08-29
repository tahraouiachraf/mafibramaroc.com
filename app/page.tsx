import { ArrowRight, Award, CheckCircle2, Clock, Factory, Leaf, PackageCheck, Ruler, ShieldCheck, Truck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Chrome } from "./components/Chrome";

const values: { title: string; text: string; Icon: LucideIcon }[] = [
  { title: "Qualité", text: "Des produits conformes aux normes internationales.", Icon: Award },
  { title: "Réactivité", text: "Une organisation pensée pour des livraisons rapides.", Icon: Clock },
  { title: "Écologie", text: "Des emballages constitués majoritairement de bois.", Icon: Leaf },
  { title: "Éthique", text: "Une entreprise engagée dans son territoire.", Icon: ShieldCheck }
];

const clients = ["NESTLÉ", "PAPREC", "CMCP", "AGRISOUSS", "SOTHEMA", "COOPÉRATIVE ZAOUIA"];

const stats = [
  ["20M", "emballages produits par an"],
  ["600K", "palettes produites par an"],
  ["4 ha", "unité principale à M'Harza Sahel"]
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

export default function Home() {
  return (
    <Chrome>
      <main>
        <section className="home-hero">
          <div className="wrap home-hero__grid">
            <div className="home-hero__content" data-reveal>
              <span className="eyebrow">Fabrication d'emballages et palettes bois</span>
              <h1>MAFIBRA accompagne l'export agricole et l'industrie marocaine.</h1>
              <p>Réactivité, écologie, traçabilité et qualité de production au service de vos besoins industriels.</p>
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
              <img src="/mafibramaroc/prod.jpg" alt="Unité de production Mafibra" />
              <div className="hero-card">
                <Ruler size={22} />
                <strong>Production contrôlée</strong>
                <span>Bois traité, traçabilité et conformité export.</span>
              </div>
            </div>
          </div>
        </section>

        <section className="wrap value-grid">
          {values.map(({ title, text, Icon }) => (
            <article key={title} data-reveal>
              <Icon size={28} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </section>

        <section className="stats-band">
          <div className="wrap stats-grid" data-reveal>
            {stats.map(([number, label]) => (
              <article key={number}>
                <strong>{number}</strong>
                <span>{label}</span>
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
          <div className="wrap eco-band__content" data-reveal>
            <span className="section-kicker">Développement durable</span>
            <h2>Une entreprise écologique et responsable</h2>
            <p>Nos emballages sont constitués majoritairement de bois et s'inscrivent dans une démarche responsable.</p>
            <img src="/mafibramaroc/nimp.jpg" alt="Certification NIMP 15" />
          </div>
        </section>

        <section className="wrap clients">
          <h2 data-reveal>Ils nous font confiance</h2>
          <div className="client-grid" data-reveal>
            {clients.map((client) => (
              <span key={client}>{client}</span>
            ))}
          </div>
        </section>
      </main>
    </Chrome>
  );
}
