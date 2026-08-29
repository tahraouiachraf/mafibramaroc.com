"use client";

import { Send } from "lucide-react";
import { FormEvent, useState } from "react";

const productTypes = ["Emballages bois", "Palettes industrielles", "Palox", "Emballage sur mesure"];

export function QuoteForm() {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const lines = [
      `Nom: ${form.get("name") || ""}`,
      `Societe: ${form.get("company") || ""}`,
      `Email: ${form.get("email") || ""}`,
      `Telephone: ${form.get("phone") || ""}`,
      `Produit: ${form.get("product") || ""}`,
      `Quantite: ${form.get("quantity") || ""}`,
      `Dimensions: ${form.get("dimensions") || ""}`,
      `Destination: ${form.get("destination") || ""}`,
      `Delai souhaite: ${form.get("deadline") || ""}`,
      "",
      `${form.get("message") || ""}`
    ];
    const subject = encodeURIComponent("Demande de devis - Mafibra");
    const body = encodeURIComponent(lines.join("\n"));
    setSent(true);
    window.location.href = `mailto:direction@mafibra.ma?subject=${subject}&body=${body}`;
  }

  return (
    <form className="quote-form" onSubmit={submit}>
      <div className="field-grid">
        <label>Nom complet<input name="name" required type="text" /></label>
        <label>Société<input name="company" type="text" /></label>
        <label>Email<input name="email" required type="email" /></label>
        <label>Téléphone<input name="phone" required type="tel" /></label>
      </div>
      <div className="field-grid">
        <label>
          Produit
          <select name="product" required defaultValue="">
            <option disabled value="">Choisir un produit</option>
            {productTypes.map((type) => <option key={type}>{type}</option>)}
          </select>
        </label>
        <label>Quantité estimée<input name="quantity" placeholder="Ex. 10 000 unités" type="text" /></label>
        <label>Dimensions<input name="dimensions" placeholder="Ex. 1200 x 800 mm" type="text" /></label>
        <label>Destination<input name="destination" placeholder="Ville / pays" type="text" /></label>
      </div>
      <label>Délai souhaité<input name="deadline" type="text" /></label>
      <label>Message<textarea name="message" rows={6} /></label>
      <button type="submit"><Send size={17} /> Envoyer la demande</button>
      {sent && <p className="form-note">Votre messagerie va s'ouvrir avec la demande préremplie.</p>}
    </form>
  );
}
