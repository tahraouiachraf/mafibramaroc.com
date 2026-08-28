import { Chrome } from "../components/Chrome";

const coords = [
  ["CENTRE", "Usine : Route côtière d'Azemmour km 53.4 - M'HARZA ESSAHEL BIR JDID", "Tél : 0523 35 63 81 - 0523356382 - 0523346383 - 0699319391", "E-mail : direction@mafibra.ma"],
  ["SOUSS : OULAD TEIMA", "Adresse : Route de Taroudant Douar Ait Bel Kassem - SIDI AHMEM OUAAMER - OULAD TEIMA", "Tél : 0662 014 722", "E-mail : agenceagd@mafibra.ma"],
  ["ORIENTAL : BERKANE", "Adresse : AGROPOLE DE BERKANE Lot C8 MADAGH", "Tél : 0662 014 160", "E-mail : agencebke@mafibra.ma"]
];

export default function ContactPage() {
  return (
    <Chrome>
      <main>
        <section className="page-title">
          <div className="wrap page-title__inner">
            <h1>Contact</h1>
            <span>Vous êtes ici : Accueil / Contact</span>
          </div>
        </section>

        <section className="map-strip" data-reveal>
          <iframe title="Mafibra map" src="https://www.openstreetmap.org/export/embed.html?bbox=-8.114%2C33.407%2C-8.096%2C33.421&layer=mapnik" />
        </section>

        <section className="wrap contact-grid">
          <form className="contact-form" data-reveal>
            <label>Votre nom (obligatoire)<input type="text" /></label>
            <label>Votre email (obligatoire)<input type="email" /></label>
            <label>Sujet<input type="text" /></label>
            <label>Votre message<textarea rows={8} /></label>
            <button type="button">Envoyer</button>
          </form>
          <div className="contact-coords" data-reveal>
            <h2>Nos <strong>Coordonnées</strong></h2>
            {coords.map(([title, ...lines]) => (
              <article key={title}>
                <h3>{title}</h3>
                {lines.map((line) => <p key={line}>{line}</p>)}
              </article>
            ))}
          </div>
        </section>
      </main>
    </Chrome>
  );
}
