import { Chrome } from "../components/Chrome";

export default function RecrutementPage() {
  return (
    <Chrome>
      <main>
        <section className="page-title">
          <div className="wrap page-title__inner">
            <h1>Recrutement</h1>
            <span>Vous êtes ici : Accueil / Recrutement</span>
          </div>
        </section>
        <section className="wrap text-page" data-reveal>
          <h2>Rejoindre MAFIBRA c'est rejoindre une entreprise dynamique en pleine expansion.</h2>
          <p>Nous sommes constamment en recherche de profils de haute qualité, prêts à mettre leurs compétences au service de l'innovation technique et managériale de l'entreprise.</p>
        </section>
      </main>
    </Chrome>
  );
}
