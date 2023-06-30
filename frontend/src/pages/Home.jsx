import "../main.scss";
import { Container } from "@mui/material";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ThemedExample from "../components/ThemeExample";
import CardImpactAppareils from "../components/CardImpactAppareils";
import CardImpactCO2 from "../components/CardImpactCO2";
import Slogan from "../assets/Slogan.png";
import Hand from "../assets/Hand.svg";

export default function Home() {
  return (
    <div>
      <NavBar />
      <ThemedExample />
      <div className="flex">
        <img src={Slogan} alt="slogan" className="absolute ml-48" />
        <div className="w-6/12">
          <Container className="h-screen mt-1 bg-primary-800 flex flex-col">
            <div className="mx-28 mt-10">
              <h1 className="mt-36">
                Bonjour, <br /> Team Bordeaux
              </h1>

              <h3 className="mt-12 mb-10">Votre impact</h3>
              <div className="flex gap-28">
                <CardImpactAppareils />
                <CardImpactCO2 />
              </div>
            </div>
          </Container>
        </div>
        <img src={Hand} alt="main" className="fixed bottom-0 left-2/3" />
      </div>
      <Footer />
    </div>
  );
}
