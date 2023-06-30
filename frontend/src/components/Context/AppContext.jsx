import React, { createContext, useState, useMemo, useEffect } from "react";
import fetch from "../../services/api.services";
import PropTypes from "prop-types";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [timeline, setTimeline] = useState(0);

  // Selections de l'utilisateur
  const [marque, setMarque] = useState();
  const [marqueId, setMarqueId] = useState();
  const [model, setModel] = useState();

  const [stockage, setStockage] = useState();
  const [ram, setRam] = useState();
  const [etat, setEtat] = useState();

  const [isBlocked, setIsBlocked] = useState();
  const [deviceWorks, setDeviceWorks] = useState();
  const [buttonsDeviceWorks, setButtonsdeviceWorks] = useState();

  const [chargerDeviceWorks, setChargerDeviceWorks] = useState();
  const [microphoneDeviceWorks, setMicrophoneDeviceWorks] = useState();
  const [newPrice, setNewPrice] = useState();

  // Données pour les boutons select récupérées depuis le back

  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);
  const [storages, setStorages] = useState([]);
  const [rams, setRams] = useState([]);

  const co2 = 200 + Math.random() * 100;

  // Conditions qui vérifient si les valeurs sont bien sélectionnées.

  const minimalConditions =
    deviceWorks === true &&
    buttonsDeviceWorks === true &&
    chargerDeviceWorks === true &&
    microphoneDeviceWorks === true &&
    isBlocked === true;

  const deviceBrandCompleted = marque !== undefined;

  const deviceInfoCompleted =
    model !== undefined && stockage !== undefined && ram !== undefined;

  const deviceStateCompleted = etat !== undefined;

  const updateTimeline = (value) => {
    setTimeline(value);
  };

  // Récupère les données depuis le back

  useEffect(() => {
    fetch("brands", setBrands);
    fetch("storages", setStorages);
    fetch("rams", setRams);
    fetch("models", setModels);
  }, []);

  // Pour information dans la console

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

  //

  const contextValue = useMemo(
    () => ({
      timeline,
      setTimeline,
      updateTimeline,
      marque,
      marqueId,
      setMarque,
      setMarqueId,
      model,
      setModel,
      stockage,
      setStockage,
      ram,
      setRam,
      etat,
      setEtat,
      isBlocked,
      setIsBlocked,
      newPrice,
      setNewPrice,
      brands,
      models,
      storages,
      rams,
      deviceWorks,
      buttonsDeviceWorks,
      chargerDeviceWorks,
      microphoneDeviceWorks,
      minimalConditions,
      deviceBrandCompleted,
      deviceInfoCompleted,
      deviceStateCompleted,
      co2,
    }),
    [
      timeline,
      marque,
      marqueId,
      model,
      stockage,
      ram,
      etat,
      isBlocked,
      newPrice,
      brands,
      models,
      storages,
      rams,
      deviceWorks,
      buttonsDeviceWorks,
      chargerDeviceWorks,
      microphoneDeviceWorks,
      minimalConditions,
      deviceBrandCompleted,
      deviceInfoCompleted,
      deviceStateCompleted,
      co2,
    ]
  );

  useEffect(() => {
    console.info("context value:", contextValue);
  });

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}
AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AppContext;
