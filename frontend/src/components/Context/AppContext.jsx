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
