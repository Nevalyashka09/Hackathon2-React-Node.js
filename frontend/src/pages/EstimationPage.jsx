import "../main.scss";
import { useState, useEffect } from "react";
import { AppProvider } from "../components/Context/AppContext";
import ThemeExample from "../components/ThemeExample";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import TimeLine from "../components/TimeLine";
import Phone from "../assets/images/phoneSquare.png";
import Title from "../components/Title";

export default function Home() {
  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);
  const [storages, setStorage] = useState([]);
  const [rams, setRams] = useState([]);

  const [deviceWorks, setDeviceWorks] = useState();
  const [buttonsDeviceWorks, setDesetButtonsdeviceWorks] = useState();
  const [chargerDeviceWorks, setChargerDeviceWorks] = useState();
  const [microphoneDeviceWorks, setMicrophoneDeviceWorks] = useState();
  const [deviceIsBlocked, setDeviceIsBlocked] = useState();

  const [selectedBrand, setSelectBrand] = useState();
  const [selectedModel, setSelectedModel] = useState();
  const [selectedStorage, setSelectedStorage] = useState();
  const [selectedRam, setSelectedRam] = useState();
  const [selectedState, setSelectedState] = useState();

  const [estimatedPrice, setEstimatedPrice] = useState();
  const saving = models.price - estimatedPrice;
  const co2 = 200 + Math.random() * 100;

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
