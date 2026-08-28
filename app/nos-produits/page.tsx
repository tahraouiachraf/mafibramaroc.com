import { Chrome } from "../components/Chrome";

const products = [
  {
    title: "Emballages bois fruits et légumes",
    images: ["emballage.jpg"],
    text: [
      "Emballages légers bois est principalement destinés à l'exportation des fruits et légumes. Il est composé de quatre éléments en panneaux de bois, et d'un fond déroulé en bois ou en panneaux de bois, agrafés entre eux par du fil de fer galvanisé.",
      "Nos emballages bois destinés à l'exportation des fruits et légumes répondent aux normes de l'EACCE. Tous les intrants ont leur certificat d'alimentarité.",
      "MAFIBRA propose un marquage personnalisé des emballages à ses clients, assuré soit par impression FLEXO soit par papier contre-collé."
    ]
  },
  {
    title: "Emballages bois industriels",
    images: ["prod.jpg"],
    text: [
      "Les emballages bois industriels sont utilisés pour la manutention et transport de pièces lourdes et encombrantes nécessitant une protection.",
      "MAFIBRA fourni des emballages sur mesure pour tout type de produit. Les besoins sont analysés par une équipe technique qui définit avec précision les caractéristiques propres à chaque demande."
    ]
  },
  {
    title: "Palettes",
    images: ["Palette_1.jpg", "Palette_2.jpg", "Palette_3.jpg"],
    text: ["MAFIBRA réalise divers types de palettes, optimisé en fonction des besoins industriels des clients ainsi que des transports."]
  },
  {
    title: "Palox",
    images: ["Palox_1.jpg", "Palox_2.jpg", "Palox_3.jpg"],
    text: ["MAFIBRA produit également des palox ou palettes-caisses permettant l'export de produits agricoles tels que la pastèque, le melon, potiron, orange, etc..., allant de 350 à 750 kg."]
  }
];

export default function ProductsPage() {
  return (
    <Chrome>
      <main>
        <PageTitle title="Nos produits" />
        <section className="wrap page-intro" data-reveal>
          <h2>MAFIBRA offre 3 catégories de produits à ses clients</h2>
          <p>Tous nos produits sont certifiés conformes NIMP 15 et répondent aux normes internationales.</p>
        </section>
        <section className="wrap product-list">
          {products.map((product, index) => (
            <article className={index % 2 ? "product-row product-row--reverse" : "product-row"} key={product.title} data-reveal>
              <div className="product-gallery">
                {product.images.map((image) => (
                  <img src={`/mafibramaroc/${image}`} alt={product.title} key={image} />
                ))}
              </div>
              <div className="product-copy">
                <h3>{product.title}</h3>
                {product.text.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </article>
          ))}
        </section>
        <section className="wrap palette-note" data-reveal>
          <h3>Palettes/couvercles</h3>
          <p>MAFIBRA bénéficie de lignes de montage automatisé assurant une production standardisée de palettes.</p>
          <p><strong>Type de palettes :</strong><br />2 entrées sur chevron ou 4 entrées sur dès.</p>
          <p>Toutes nos palettes sont marquées d'un code de traçabilité, permettant de connaître les intrants utilisés dans sa fabrication.</p>
        </section>
      </main>
    </Chrome>
  );
}

function PageTitle({ title }: { title: string }) {
  return (
    <section className="page-title">
      <div className="wrap page-title__inner">
        <h1>{title}</h1>
        <span>Vous êtes ici : Accueil / {title}</span>
      </div>
    </section>
  );
}
