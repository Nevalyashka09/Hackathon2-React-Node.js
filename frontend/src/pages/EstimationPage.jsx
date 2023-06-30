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

export default function EstimationPage() {
  const {
    minimalConditions,
    deviceBrandCompleted,
    deviceInfoCompleted,
    deviceStateCompleted,
    recapCompleted,
    seeEstimation,
  } = useContext(AppContext);

  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);
  const [storages, setStorage] = useState([]);
  const [rams, setRams] = useState([]);

  useEffect(() => {
    fetch("brands", setBrands);
    fetch("storages", setStorage);
    fetch("rams", setRams);
    fetch("models", setModels);
  }, []);

  // pour information dans la console

  useEffect(() => {
    console.info("brands", brands);
  }, [brands]);

  useEffect(() => {
    console.info("storages", storages);
  }, [storages]);

  useEffect(() => {
    console.info("rams", rams);
  }, [rams]);

  useEffect(() => {
    console.info("models", models);
  }, [models]);

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
          Hello Bob
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
          justifyContent: "flex-end",
          position: "absolute",
          zIndex: "2",
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

// RENDU CONDITIONNEL DE TEST pour les futurs composants

// {
//   minimalConditions !== undefined && !minimalConditions && <Modal />;
// }

// {
//   minimalConditions !== undefined && minimalConditions && <Brand />;
// }

// {
//   deviceBrandCompleted && <Infos />;
// }

// {
//   deviceInfoCompleted && <State />;
// }

// {
//   deviceStateCompleted && <Recap />;
// }

// {
//   recapCompleted && <Price />;
// }
