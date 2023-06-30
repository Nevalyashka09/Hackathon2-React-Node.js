import React from "react";
import Models from "./Models";
import Stockage from "./Stockage";
import Ram from "./Ram";

function Accessoire() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
      <div>
        <h1>Quel est votre model ?</h1>
        <Models />
      </div>

      <div>
        <h1>Quel est sa capacité de stockage ?</h1>
        <Stockage />
      </div>
      <div>
        <h1>Quel est sa capacité de RAM ?</h1>
        <Ram />
      </div>
    </div>
  );
}

export default Accessoire;
