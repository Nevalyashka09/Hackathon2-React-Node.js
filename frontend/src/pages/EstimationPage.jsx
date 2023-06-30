import "../main.scss";
import { useState, useEffect, useContext } from "react";
import AppContext from "../components/Context/AppContext";
import ThemeExample from "../components/ThemeExample";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import TimeLine from "../components/TimeLine";
import Phone from "../assets/images/phoneSquare.png";
import Title from "../components/Title";
import boy from "../assets/images/boy.png";
import girl from "../assets/images/girl.png";
import Etat from "../components/Etat";
import ContentFonctionalite from "../components/ContentFonctionalite";
import ContentRecap from "../components/ContentRecap";
import CardLogo from "../components/CardLogo";
import Models from "../components/Models";
import Price from "../components/Price";

export default function EstimationPage() {
  const { timeline, setTimeline } = useContext(AppContext);
  let titleText = "";
  if (timeline === 0) {
    titleText = "Quelles sont les fonctionnalités du téléphone ?";
  } else if (timeline === 1) {
    titleText = "Quelle est la marque du téléphone ?";
  } else if (timeline === 2) {
    titleText = "Quel est le modèle du téléphone ?";
  } else if (timeline === 3) {
    titleText = "Quel est l'état du téléphone ?";
  } else if (timeline === 4) {
    titleText = "Récapitulatif des informations du téléphone";
  } else if (timeline === 5) {
    titleText = "Voir l'estimation du téléphone";
  }

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
        <Title text={titleText} />
        <div
          style={{
            marginTop: "50px",
            marginBottom: "50px",
            width: "650px",
            height: "360px",
          }}
        >
          {timeline === 0 ? <ContentFonctionalite /> : ""}
          {timeline === 1 ? <CardLogo /> : ""}
          {timeline === 2 ? <Models /> : ""}
          {timeline === 3 ? <Etat /> : ""}
          {timeline === 4 ? <ContentRecap /> : ""}
          {timeline === 5 ? <Price /> : ""}
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
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          position: "absolute",
          zIndex: "-1",
          top: "0",
          bottom: "0",
          marginTop: "320px",
        }}
      >
        <img
          style={{
            height: "500px",
            marginRight: "900px",
            marginLeft: "50px",
          }}
          src={boy}
          alt=""
        />
        <img
          style={{
            height: "450px",
            marginTop: "50px",
          }}
          src={girl}
          alt=""
        />
        <ThemeExample />
        <Footer />
      </div>
    </div>
  );
}
