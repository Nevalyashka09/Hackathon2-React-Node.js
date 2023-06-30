import React, { createContext, useState, useMemo, useEffect } from "react";
import PropTypes from "prop-types";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [timeline, setTimeline] = useState(0);
  const [marque, setMarque] = useState("Apple");
  const [model, setModel] = useState("");
  const [stockage, setStockage] = useState();
  const [ram, setRam] = useState();
  const [etat, setEtat] = useState("abimé");
  const [isBlocked, setIsBlocked] = useState(false);
  const [newPrice, setNewPrice] = useState(0);

  const [deviceWorks, setDeviceWorks] = useState();
  const [buttonsDeviceWorks, setDesetButtonsdeviceWorks] = useState();
  const [chargerDeviceWorks, setChargerDeviceWorks] = useState();
  const [microphoneDeviceWorks, setMicrophoneDeviceWorks] = useState();

  const [estimatedPrice, setEstimatedPrice] = useState();
  const [seeEstimation, setSeeEstimation] = useState();

  const co2 = 200 + Math.random() * 100;

  const minimalConditions =
    deviceWorks === true &&
    buttonsDeviceWorks === true &&
    chargerDeviceWorks === true &&
    microphoneDeviceWorks === true &&
    isBlocked === true;

  const deviceBrandCompleted = minimalConditions && marque !== undefined;

  const deviceInfoCompleted =
    deviceBrandCompleted &&
    model !== undefined &&
    stockage !== undefined &&
    ram !== undefined;

  const deviceStateCompleted = deviceInfoCompleted && etat !== undefined;

  const recapCompleted = deviceStateCompleted && seeEstimation !== undefined;

  const updateTimeline = (value) => {
    setTimeline(value);
  };

  const contextValue = useMemo(
    () => ({
      timeline,
      updateTimeline,
      marque,
      setMarque,
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
    }),
    [timeline, marque, model, stockage, ram, etat, isBlocked, newPrice]
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
