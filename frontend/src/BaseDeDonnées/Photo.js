import TresBonEtat from "../assets/images/TresBonEtat.png";
import Reconditionne from "../assets/images/Reconditionne.png";
import Reparable from "../assets/images/Reparable.png";
import Abime from "../assets/images/Abime.png";

const data = [
  {
    id: 0,
    photo: TresBonEtat,
    name: "Trés Bon Etat",

    description:
      "Le téléphone est en excellent état, sans aucun défaut visible. L'extérieur est pratiquement neuf, sans rayures, éraflures ou dommages. Toutes les fonctionnalités sont pleinement opérationnelles, offrant une expérience utilisateur optimale. La batterie tient bien la charge et l'appareil est prêt à être utilisé sans problème.",
  },
  {
    id: 1,
    photo: Reconditionne,
    name: "Reconditionné",
    description:
      "Ce téléphone a été rénové pour restaurer ses performances. Il a pu être nettoyé en profondeur, réparé ou équipé de pièces de rechange pour corriger d'éventuels problèmes. Bien qu'il puisse présenter de légères marques d'usure, il fonctionne de manière fiable. Certaines parties, telles que l'écran ou la batterie, ont peut-être été remplacées pour garantir un fonctionnement optimal. C'est une option intéressante pour ceux qui recherchent un téléphone fonctionnel à un prix plus abordable.",
  },
  {
    id: 2,
    photo: Reparable,
    name: "Réparable",
    description:
      "Ce téléphone a des problèmes qui peuvent être réparés pour le remettre en état de fonctionnement. Il peut présenter des défauts spécifiques, tels qu'un écran fissuré ou une batterie déchargée rapidement, mais ces problèmes peuvent être résolus par une réparation professionnelle. Une fois réparé, le téléphone retrouvera ses performances d'origine et pourra être utilisé normalement.",
  },
  {
    id: 3,
    photo: Abime,
    name: "Abimé",
    description:
      "Ce téléphone présente des signes visibles d'usure, de dommages ou de défauts plus prononcés. Il peut avoir des rayures profondes, des bosses ou des fissures visibles sur l'écran ou le boîtier. Bien qu'il puisse encore fonctionner, il est important de noter que l'apparence et les performances peuvent être affectées par ces dommages. Il peut nécessiter des réparations importantes pour retrouver un état de fonctionnement optimal.",
  },
];

export default data;
