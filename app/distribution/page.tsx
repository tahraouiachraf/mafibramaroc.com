import { Chrome } from "../components/Chrome";

export default function DistributionPage() {
  return (
    <Chrome>
      <main>
        <section className="page-title">
          <div className="wrap page-title__inner">
            <h1>Distribution</h1>
            <span>Vous êtes ici : Accueil / Distribution</span>
          </div>
        </section>
        <section className="wrap text-page" data-reveal>
          <h2>Une couverture nationale</h2>
          <p>MAFIBRA est implantée au Centre, au Souss et dans l'Oriental afin de faciliter les livraisons et maintenir une proximité avec ses clients.</p>
          <img src="/mafibramaroc/carte.jpg" alt="Carte des implantations Mafibra" />
        </section>
      </main>
    </Chrome>
  );
}
