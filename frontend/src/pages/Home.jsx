import "../main.scss";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ThemedExample from "../components/ThemeExample";

export default function Home() {
  return (
    <div>
      <h1>Test</h1>
      <NavBar />
      <h1>Estimer un prix</h1>
      <ThemedExample />
      <Footer />
    </div>
  );
}
