import { CheckCircle2, Clock, FileText, PackageCheck, ShieldCheck, Truck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Chrome } from "../components/Chrome";
import { QuoteForm } from "../components/QuoteForm";

const checklist = [
  "Type de produit : emballage bois, palette, palox ou sur mesure",
  "Dimensions souhaitées ou contraintes de charge",
  "Quantité estimée et fréquence de commande",
  "Destination, délai et exigences export"
];

const cards: { title: string; text: string; Icon: LucideIcon }[] = [
  { title: "Réponse ciblée", text: "Une demande mieux structurée permet une réponse commerciale plus précise.", Icon: FileText },
  { title: "Conformité export", text: "Prise en compte du traitement NIMP 15, du marquage et de la traçabilité.", Icon: ShieldCheck },
  { title: "Organisation livraison", text: "Évaluation du volume, du délai et de la destination avant production.", Icon: Truck }
];

export default function DevisPage() {
  return (
    <Chrome>
      <main>
        <section className="page-title page-title--quote">
          <div className="wrap page-title__inner">
            <div>
              <span className="section-kicker">Projet B2B</span>
              <h1>Demande de devis</h1>
            </div>
            <span>Vous êtes ici : Accueil / Demande de devis</span>
          </div>
        </section>

        <section className="wrap quote-layout">
          <aside className="quote-aside" data-reveal>
            <PackageCheck size={30} />
            <h2>Préparer votre besoin</h2>
            <p>Pour accélérer le traitement, indiquez les éléments disponibles sur votre produit, vos volumes et votre destination.</p>
            <ul>
              {checklist.map((item) => (
                <li key={item}><CheckCircle2 size={16} /> {item}</li>
              ))}
            </ul>
            <div className="quote-mini">
              <Clock size={20} />
              <span>Réactivité commerciale pour les demandes professionnelles.</span>
            </div>
          </aside>
          <div data-reveal>
            <QuoteForm />
          </div>
        </section>

        <section className="wrap quote-benefits">
          {cards.map(({ title, text, Icon }) => (
            <article key={title} data-reveal>
              <Icon size={25} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </section>
      </main>
    </Chrome>
  );
}
