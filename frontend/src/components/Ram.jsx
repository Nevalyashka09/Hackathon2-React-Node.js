import React, { useContext } from "react";
import { Button } from "@mui/material";
import AppContext from "./Context/AppContext";

import Ram from "../BaseDeDonnées/Ram.json";

function RamAccordion() {
  const { ram, setRam } = useContext(AppContext);
  console.info(ram);
  return (
    <div
      style={{
        backgroundColor: "white",
        display: "flex",
        gap: "10px",
        width: "528px",
      }}
    >
      {Ram.map((ramItem) => (
        <Button
          key={ramItem.id}
          variant={ram === ramItem.ram ? "contained" : "outlined"}
          onClick={() => setRam(ramItem.ram)}
        >
          {ramItem.ram} GB
        </Button>
      ))}
    </div>
  );
}

export default RamAccordion;
