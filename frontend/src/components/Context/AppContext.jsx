import React, { createContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [timeline, setTimeline] = useState(0);
  const [marque, setMarque] = useState("");
  const [model, setModel] = useState("");
  const [stockage, setStockage] = useState("");
  const [ram, setRam] = useState("");
  const [etat, setEtat] = useState("");

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
    }),
    [timeline, marque, model, stockage, ram, etat]
  );

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}
AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AppContext;
