import "../main.scss";
import { useState, useEffect, useContext } from "react";
import AppContext from "../components/Context/AppContext";
import ThemeExample from "../components/ThemeExample";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import TimeLine from "../components/TimeLine";
import Phone from "../assets/images/phoneSquare.png";
import Title from "../components/Title";
import Etat from "../components/Etat";
import ContentFonctionalite from "../components/ContentFonctionalite";

export default function EstimationPage() {
  const {
    timeline,
    setTimeline,
    minimalConditions,
    deviceBrandCompleted,
    deviceInfoCompleted,
    deviceStateCompleted,
    recapCompleted,
  } = useContext(AppContext);

  const [initialLoading, setInitialLoading] = useState(false);

  useEffect(() => {
    setInitialLoading(true);
    console.info("initialoading is", initialLoading);

    if (initialLoading === true) {
      if (minimalConditions) {
        setTimeline((prevTimeline) => prevTimeline + 1);
      } else {
        setTimeline((prevTimeline) => prevTimeline - 1);
      }
      if (deviceBrandCompleted) {
        setTimeline((prevTimeline) => prevTimeline + 1);
      } else {
        setTimeline((prevTimeline) => prevTimeline - 1);
      }
      if (deviceInfoCompleted) {
        setTimeline((prevTimeline) => prevTimeline + 1);
      } else {
        setTimeline((prevTimeline) => prevTimeline - 1);
      }
      if (deviceStateCompleted) {
        setTimeline((prevTimeline) => prevTimeline + 1);
      } else {
        setTimeline((prevTimeline) => prevTimeline - 1);
      }
      if (recapCompleted) {
        setTimeline((prevTimeline) => prevTimeline + 1);
      } else {
        setTimeline((prevTimeline) => prevTimeline - 1);
      }
    }
  }, [
    minimalConditions,
    deviceBrandCompleted,
    deviceInfoCompleted,
    deviceStateCompleted,
    recapCompleted,
  ]);

  return (
    <div>
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
        <div
          style={{
            marginTop: "50px",
            marginBottom: "50px",
            width: "650px",
            height: "360px",
          }}
        >
          {timeline === 0 ? <ContentFonctionalite /> : ""}
          {timeline === 1 ? <p>Comp 1</p> : ""}
          {timeline === 2 ? <p>Comp 2</p> : ""}
          {timeline === 3 ? <p>Comp 3</p> : ""}
          {timeline === 4 ? <Etat /> : ""}
          {timeline === 5 ? <p>Comp 5</p> : ""}
        </div>
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
    </div>
  );
}
