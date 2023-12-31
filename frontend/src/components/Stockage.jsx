import React, { useContext } from "react";
import { Button } from "@mui/material";
import AppContext from "./Context/AppContext";

import storageData from "../BaseDeDonnées/Stockage.json";

function StorageAccordion() {
  const { stockage, setStockage } = useContext(AppContext);
  console.info(stockage);
  return (
    <div
      style={{
        backgroundColor: "white",
        display: "flex",
        gap: "10px",
        width: "628px",
      }}
    >
      {storageData.map((storageItem) => (
        <Button
          key={storageItem.id}
          variant={stockage === storageItem.storage ? "contained" : "outlined"}
          onClick={() => setStockage(storageItem.storage)}
        >
          {storageItem.storage} Go
        </Button>
      ))}
    </div>
  );
}

export default StorageAccordion;
