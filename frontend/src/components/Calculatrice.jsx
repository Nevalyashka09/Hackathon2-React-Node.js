import React, { useContext } from "react";
import AppContext from "./Context/AppContext";

function Calculatrice() {
  const { stockage, ram, model, etat, isBlocked } = useContext(AppContext);

  const basePrice = 500; // Prix de base du smartphone

  const Prixfinal = () => {
    let totalPrice = basePrice;

    // Calcul en fonction du modèle
    // Remplacer les valeurs des modèles par les prix réels correspondants
    if (model === "Modèle1") {
      totalPrice += 100;
    } else if (model === "Modèle2") {
      totalPrice += 200;
    } else if (model === "Modèle3") {
      totalPrice += 300;
    }

    // Calcul en fonction de la RAM
    if (ram === 1) {
      totalPrice += 30;
    } else if (ram === 2) {
      totalPrice += 40;
    } else if (ram === 3) {
      totalPrice += 54;
    }

    // Calcul en fonction du stockage
    if (stockage === 16) {
      totalPrice += 31;
    } else if (stockage === 32) {
      totalPrice += 45;
    } else if (stockage === 64) {
      totalPrice += 66;
    }

    // Calcul en fonction de l'état du téléphone
    if (etat === "DEEE") {
      totalPrice = 0; // Perd 100% du prix
    } else if (etat === "abimé") {
      totalPrice *= 0.5; // Perd 50% du prix
    } else if (etat === "reconditionnable") {
      totalPrice *= 0.9; // Perd 10% du prix
    } else if (etat === "bon etat") {
      totalPrice *= 1; // Garde son prix
    } else if (etat === "neuf") {
      totalPrice *= 1.1; // Gagne 10% du prix
    }

    // Calcul en fonction du blocage du téléphone
    if (isBlocked) {
      totalPrice *= 0.9; // Perd 10% du prix
    }

    return totalPrice;
  };

  return (
    <div>
      <h2>{Prixfinal}</h2>
    </div>
  );
}

export default Calculatrice;
