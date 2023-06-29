import React from "react";
import Loupe from "./Loupe";
import data from "../BaseDeDonnées/Photo";

function Etat() {
  return (
    <div
      style={{
        margin: "auto",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "50px",
        width: "50vw",
      }}
    >
      {data.map((item) => (
        <div style={{ width: "300px" }} key={item.id}>
          <Loupe image={item.photo} />
          <div
            style={{
              borderRadius: "0 0 30px 30px ",
              backgroundColor: "red",
              height: "30px",
            }}
          />
        </div>
      ))}
    </div>
  );
}

export default Etat;
