import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import FAQ from "../assets/Faq.jpeg";

export default function SimpleAccordion() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/contacts");
  };

  return (
    <div>
      <NavBar />
      <div className="flex h-screen">
        <div className="w-1/4 py-12 mb-32">
          <img
            src={FAQ}
            alt="faq"
            className="w-full h-full object-cover rounded-r-xl"
          />
        </div>
        <div className="w-3/4 px-20">
          <h1 className="text-5xl mt-16 mb-10 p-0">Foire aux questions</h1>
          <Accordion defaultExpanded className="p-2.5">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="text-primary-50" />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h6" className="font-semibold">
                Où puis-je trouver des informations sur la capacité de stockage
                du téléphone ?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="text-gray-500">
                La capacité de stockage d'un téléphone portable est généralement
                indiquée dans les paramètres du téléphone ou sur l'emballage
                d'origine. Vous pouvez également rechercher les spécifications
                du modèle de téléphone en ligne, sur le site web du fabricant ou
                sur des sites de comparaison de téléphones.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="p-2.5">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="text-primary-50" />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography variant="h6" className="font-semibold">
                Comment puis-je vérifier l'état physique du téléphone avant de
                le vendre ?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="text-gray-500">
                Vous pouvez examiner attentivement le téléphone pour repérer les
                rayures, les fissures ou tout autre dommage visible. Vérifiez
                également le fonctionnement des boutons, des ports de connexion
                et de l'écran tactile. Si possible, effectuez des tests de
                performance pour vous assurer que le téléphone fonctionne
                correctement.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="p-2.5">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="text-primary-50" />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography variant="h6" className="font-semibold">
                Comment puis-je vérifier l'autonomie de la batterie d'un
                téléphone ?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="text-gray-500">
                Vous pouvez utiliser des applications de test de batterie
                disponibles sur les app stores pour évaluer la capacité de la
                batterie. Ces applications fournissent des informations sur la
                santé de la batterie et la durée de vie restante. Vous pouvez
                également mentionner approximativement la durée de vie de la
                batterie en fonction de votre utilisation personnelle du
                téléphone.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="p-2.5">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="text-primary-50" />}
              aria-controls="panel4a-content"
              id="panel4a-header"
            >
              <Typography variant="h6" className="font-semibold">
                Où trouver les informations sur la mémoire RAM d'un téléphone
                portable, vous pouvez suivre les étapes suivantes ?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="text-gray-500">
                Accédez aux paramètres de votre téléphone en appuyant sur
                l'icône des paramètres, généralement représentée par une roue
                dentée ou un engrenage. À l'intérieur des paramètres, recherchez
                une section intitulée "À propos du téléphone" ou "Informations
                du téléphone". Cliquez dessus pour y accéder. Dans cette
                section, vous devriez trouver des détails sur le téléphone, y
                compris des informations sur la mémoire. Recherchez des termes
                tels que "Mémoire", "Mémoire totale" ou "RAM". La quantité de
                RAM sera généralement indiquée en gigaoctets (Go). Par exemple,
                vous pouvez trouver des informations telles que "RAM : 4 Go" ou
                "Mémoire totale : 6 Go". Si vous ne trouvez pas les informations
                sur la RAM dans les paramètres du téléphone, vous pouvez
                également effectuer une recherche en ligne en utilisant le
                modèle spécifique du téléphone pour obtenir les spécifications
                détaillées, y compris la quantité de RAM. Les sites web des
                fabricants de téléphones ou des sites de comparaison de
                téléphones sont de bonnes sources pour trouver ces informations.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="p-2.5">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="text-primary-50" />}
              aria-controls="panel5a-content"
              id="panel5a-header"
            >
              <Typography variant="h6" className="font-semibold">
                Comment puis-je vérifier si un téléphone portable est bloqué par
                un opérateur ?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="text-gray-500">
                Vous pouvez contacter votre opérateur téléphonique ou utiliser
                un outil en ligne pour vérifier le statut de verrouillage d'un
                téléphone portable. Certains téléphones affichent également des
                indications dans les paramètres, sous la section "État du
                réseau" ou "Verrouillage SIM".
              </Typography>
            </AccordionDetails>
          </Accordion>
          <h3 className="pt-20">Encore des questions ?</h3>
          <Typography>
            Vous ne trouvez pas la réponse que vous cherchez ? N'hésitez pas à
            nous contacter.
          </Typography>
          <Button
            variant="contained"
            onClick={handleClick}
            className="mt-10 bg-primary-50"
          >
            Nous contacter
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
