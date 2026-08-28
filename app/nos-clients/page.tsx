import { Chrome } from "../components/Chrome";

const clients = ["ROCA", "NESTLE", "CMCP", "Groupe KANTARI BERKANE", "Groupe BFL", "Domaines EL BOURA", "Coopérative SLIMANIA", "Coopérative ENASR", "Groupe AGRISOUSS", "Coopérative IRADA", "Coopérative ADRAR", "COMAPRIM", "AGRUMAR SOUSS", "VITA SOUSS", "SOTHEMA", "PAPSAC"];

export default function ClientsPage() {
  return (
    <Chrome>
      <main>
        <section className="page-title">
          <div className="wrap page-title__inner">
            <h1>Nos clients</h1>
            <span>Vous êtes ici : Accueil / Nos clients</span>
          </div>
        </section>
        <section className="wrap text-page" data-reveal>
          <p>Depuis plus de 10 ans MAFIBRA a su fidéliser ses clients, et conquérir de nouveaux marchés.</p>
          <p>MAFIBRA est implantée sur tout le territoire national.</p>
          <p>Nous garantissons à tous nos clients que nos produits sont certifiés NIMP 15 et respectent les normes internationales.</p>
          <h2>Principaux clients :</h2>
          <div className="client-name-grid">
            {clients.map((client) => <span key={client}>{client}</span>)}
          </div>
        </section>
      </main>
    </Chrome>
  );
}
