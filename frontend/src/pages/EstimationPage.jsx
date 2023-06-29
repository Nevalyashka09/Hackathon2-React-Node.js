import "../main.scss";
import { AppProvider } from "../components/Context/AppContext";
import ThemeExample from "../components/ThemeExample";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import TimeLine from "../components/TimeLine";
import Phone from "../assets/images/phoneSquare.png";
import Title from "../components/Title";

export default function Home() {
  return (
    <div>
      <AppProvider>
        <NavBar />
        <div className="flex flex-col items-center">
          <h3
            style={{
              fontSize: "30px",
              marginTop: "20px",
            }}
          >
            Estimer un prix
          </h3>
          <TimeLine />
          <Title text="Fonctionnalité de l’appareil" />
          <img
            style={{
              marginLeft: "10vw",
              marginRight: "10vw",
              zIndex: "-1",
              position: "absolute",
              top: "30vh",
            }}
            src={Phone}
            alt=""
          />
        </div>
        <ThemeExample />
        <Footer />
      </AppProvider>
    </div>
  );
}
