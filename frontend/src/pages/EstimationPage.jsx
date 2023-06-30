import "../main.scss";
import { useState, useEffect, useContext } from "react";
import AppContext from "../components/Context/AppContext";
import ThemeExample from "../components/ThemeExample";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import TimeLine from "../components/TimeLine";
import Phone from "../assets/images/phoneSquare.png";
import Title from "../components/Title";

export default function EstimationPage() {
  const {
    timeline,
    setTimeline,
    // minimalConditions,
    // deviceBrandCompleted,
    // deviceInfoCompleted,
    // deviceStateCompleted,
    // recapCompleted,
  } = useContext(AppContext);

  const [initialLoading, setInitialLoading] = useState(false);

  // useEffect(() => {
  //   setInitialLoading(true);
  //   console.info("initialoading is", initialLoading);

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
        <Title text="Quel est la marque du téléphone ?" />
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

      <ThemeExample />
      <Footer />
    </div>
  );
}
