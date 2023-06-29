import React, { createContext, useState, useMemo, useEffect } from "react";
import PropTypes from "prop-types";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [timeline, setTimeline] = useState(0);
  const [marque, setMarque] = useState("");
  const [model, setModel] = useState("");
  const [stockage, setStockage] = useState(64);
  const [ram, setRam] = useState(2);
  const [etat, setEtat] = useState("neuf");
  const [isBlocked, setIsBlocked] = useState(false);

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
    }),
    [timeline, marque, model, stockage, ram, etat, isBlocked]
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
