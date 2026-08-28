import { Award, Clock, Leaf, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Chrome } from "./components/Chrome";

const values: { title: string; text: string; Icon: LucideIcon }[] = [
  { title: "Qualité", text: "Des produits conformes aux normes internationales.", Icon: Award },
  { title: "Réactivité", text: "Une organisation pensée pour des livraisons rapides.", Icon: Clock },
  { title: "Écologie", text: "Des emballages constitués majoritairement de bois.", Icon: Leaf },
  { title: "Éthique", text: "Une entreprise engagée dans son territoire.", Icon: ShieldCheck }
];

const clients = ["NESTLÉ", "PAPREC", "CMCP", "AGRISOUSS", "SOTHEMA", "COOPÉRATIVE ZAOUIA"];

export default function Home() {
  return (
    <Chrome>
      <main>
        <section className="home-slider">
          <div className="home-slider__bg" />
          <div className="wrap home-slider__content" data-reveal>
            <p>Fabrication d'emballages et palettes bois</p>
            <h1>QUALITÉ</h1>
            <span>Réactivité, écologie et éthique au service de vos besoins industriels.</span>
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

        <section className="wrap intro-line" data-reveal>
          <h2>
            <strong>Fabrication de l'achat de la matière première, la production, le marquage, le montage et la livraison.</strong>{" "}
            10 millions d'emballage légers et 800 000 palettes fabriqués par an.
          </h2>
          <a href="/societe">En savoir +</a>
        </section>

        <section className="wrap home-products">
          <article data-reveal>
            <h3>EMBALLAGE</h3>
            <img src="/mafibramaroc/emballage.jpg" alt="Emballage bois" />
          </article>
          <article data-reveal>
            <h3>PALETTE BOIS</h3>
            <img src="/mafibramaroc/palette-1.jpg" alt="Palette bois" />
          </article>
        </section>

        <section className="eco-band">
          <div className="eco-band__bg" />
          <div className="wrap eco-band__content" data-reveal>
            <h2>MAFIBRA<br />une entreprise écologique et responsable</h2>
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
