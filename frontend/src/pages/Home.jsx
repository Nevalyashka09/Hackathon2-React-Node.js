import "../main.scss";
import ThemeExample from "../components/ThemeExample";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Calculatrice from "../components/Calculatrice";

export default function Home() {
  return (
    <div>
      <h1>Test</h1>;
      <NavBar />
      <h1>Estimer un prix</h1>
      <Calculatrice />
      <ThemeExample />
      <Footer />
    </div>
  );
}
