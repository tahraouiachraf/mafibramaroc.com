import { Chrome } from "../components/Chrome";

export default function SocietePage() {
  return (
    <Chrome>
      <main>
        <section className="page-title">
          <div className="wrap page-title__inner">
            <h1>Société</h1>
            <span>Vous êtes ici : Accueil / Société</span>
          </div>
        </section>

        <section className="wrap society-grid">
          <div data-reveal>
            <p>Fondée en 2001, la société MAFIBRA est une entreprise marocaine de fabrication d'emballages et de palettes en bois. Forte de plus de 15 ans de présence sur le marché marocain, MAFIBRA s'est aujourd'hui hissée au rang des grandes entreprises.</p>
            <p>MAFIBRA est une entreprise dont les produits sont principalement destinés à l'exportation de fruits et légumes, et à l'usage industriel.</p>
            <p>Son unité de production principale est implantée à Mharza Sahel, et compte une superficie de 4 hectares.</p>
            <p>Forte d'une couverture du territoire nationale, MAFIBRA est également implantée à Agadir et Berkane, où deux centres de montages sont installés et permettent la livraison des clients dans les plus brefs délais.</p>
          </div>
          <img src="/mafibramaroc/carte.jpg" alt="Carte Mafibra" data-reveal />
        </section>

        <section className="capacity-band">
          <div className="capacity-band__bg" />
          <div className="wrap capacity-band__content" data-reveal>
            <h2><strong>Capacité de production :</strong><br />20 millions d'emballages et 600 000 palettes.</h2>
            <img src="/mafibramaroc/nimp.jpg" alt="Certification NIMP 15" />
          </div>
        </section>

        <section className="wrap centered-copy" data-reveal>
          <p>MAFIBRA garanti l'origine et la conformité du traitement du bois grâce à système de traçabilité de ses produits.</p>
          <h3>Une entreprise dynamique en constante expansion</h3>
          <p>Démarrée comme entreprise familiale, MAFIBRA est aujourd'hui en constante expansion.</p>
          <p>60% des bénéfices annuels sont réinvestis dans l'amélioration des outils productions. MAFIBRA s'oriente vers une automatisation complète des processus de fabrications des emballages et palettes bois.</p>
          <p>Réactive, MAFIBRA, offre des délais de livraisons rapide, et garanti un stock de sécurité permanent permettant des livraisons immédiates.</p>
        </section>
      </main>
    </Chrome>
  );
}
