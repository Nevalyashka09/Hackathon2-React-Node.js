import React from "react";
import Loupe from "./Loupe";
import data from "../BaseDeDonnées/Photo";
import OverlayEtat from "../components/OverlayEtat";

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
        <div
          style={{
            margin: "0 auto  ",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.6)",
            border: "1px solid #ccc",
            borderRadius: "30px ",
            width: "255px",
          }}
          key={item.id}
        >
          <Loupe image={item.photo} />
          <div
            style={{
              borderRadius: "0 0 30px 30px ",
              height: "50px",
              width: "255px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "bold",
            }}
          >
            <div>{item.name}</div>
            <div
              style={{
                position: "absolute",
                marginLeft: "10%",
                marginTop: "0.8%",
              }}
            >
              <OverlayEtat title={item.name} text={item.description} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Etat;
