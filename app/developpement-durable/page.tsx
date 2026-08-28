import { Chrome } from "../components/Chrome";

export default function DurablePage() {
  return (
    <Chrome>
      <main>
        <section className="page-title">
          <div className="wrap page-title__inner">
            <h1>Développement durable</h1>
            <span>Vous êtes ici : Accueil / Développement durable</span>
          </div>
        </section>
        <section className="wrap text-page" data-reveal>
          <p>Consciente que les entreprises sont au cœur des problématiques de développement durable, MAFIBRA s'est fixé trois objectifs :</p>
          <ul>
            <li>Minimiser son impact environnemental</li>
            <li>Garantir à ses employés une politique de ressources humaines respectueuse de leur bien être</li>
            <li>Participer au développement local et à la promotion des valeurs sociales et environnementales</li>
          </ul>
          <h2>Gérer son empreinte écologique</h2>
          <p>Les produits MAFIBRA sont constitués à 99% de bois. Pin maritime, peuplier, panneaux de fibres naturels, sont les principaux matériaux utilisés pour la fabrication des emballages et palettes bois.</p>
          <h2>Approvisionnement responsable</h2>
          <p>MAFIBRA attend de ses fournisseurs une qualité de produit et un respect des normes environnementales. Ses principaux fournisseurs bois sont certifiés et engagés dans une gestion durable des forêts.</p>
          <h2>Éthique</h2>
          <p>MAFIBRA est une entreprise socialement responsable. Implantée dans une commune rurale, son unité de production principale embauche prioritairement dans le bassin d'emploi local.</p>
        </section>
      </main>
    </Chrome>
  );
}
