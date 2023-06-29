import "../main.scss";
import { Container } from "@mui/material";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ThemedExample from "../components/ThemeExample";
import CardImpactAppareils from "../components/CardImpact";
import CardImpactCO2 from "../components/CardImpactCO2";

export default function Home() {
  return (
    <div>
      <NavBar />
      <ThemedExample />
      <div className="flex">
        <div className="w-7/12">
          <Container className="h-screen mt-1 bg-primary-800 flex flex-col">
            <h1 className="m-10">
              Hello <br /> Team Bordeaux,
            </h1>
            <div className="flex gap-10">
              <CardImpactAppareils />
              <CardImpactCO2 />
            </div>
          </Container>
        </div>
      </div>
      <Footer />
    </div>
  );
}
