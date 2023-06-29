import React, { useContext } from "react";
import AppContext from "./Context/AppContext";

function Calculatrice() {
  const { stockage, ram, etat, isBlocked } = useContext(AppContext);

  const Prixfinal = () => {
    let totalPrice = 30;

    // Calcul en fonction de la RAM
    switch (ram) {
      case 1:
        totalPrice += 30;
        break;
      case 2:
        totalPrice += 40;
        break;
      case 3:
        totalPrice += 54;
        break;
      case 4:
        totalPrice += 72;
        break;
      case 6:
        totalPrice += 94;
        break;
      case 8:
        totalPrice += 120;
        break;
      case 12:
        totalPrice += 150;
        break;
      case 16:
        totalPrice += 184;
        break;
      default:
        break;
    }

    // Calcul en fonction du stockage
    switch (stockage) {
      case 16:
        totalPrice += 31;
        break;
      case 32:
        totalPrice += 45;
        break;
      case 64:
        totalPrice += 66;
        break;
      case 128:
        totalPrice += 94;
        break;
      case 256:
        totalPrice += 129;
        break;
      case 512:
        totalPrice += 171;
        break;
      case 1024:
        totalPrice += 220;
        break;
      default:
        break;
    }

    // Calcul en fonction de l'état du téléphone
    switch (etat) {
      case "DEEE":
        totalPrice = 0;
        break;
      case "abimé":
        totalPrice *= 0.5;
        break;
      case "reconditionnable":
        totalPrice *= 0.9;
        break;
      case "bon etat":
        totalPrice *= 1;
        break;
      case "neuf":
        totalPrice *= 1.1;
        break;
      default:
        break;
    }

    // Calcul en fonction du blocage du téléphone
    if (isBlocked) {
      totalPrice *= 0.9;
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
