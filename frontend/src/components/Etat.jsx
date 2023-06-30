import React, { useContext } from "react";
import Loupe from "./Loupe";
import data from "../BaseDeDonnées/Photo";
import OverlayEtat from "./OverlayEtat";
import AppContext from "./Context/AppContext";

function Etat() {
  const { setEtat, updateTimeline } = useContext(AppContext);
  const handleOverlayClick = (event) => {
    event.stopPropagation();
  };

  return (
    <div className="flex w-[700px] flex-wrap gap-10">
      {data.map((item) => (
        <div
          style={{
            margin: "0 auto  ",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.6)",
            border: "1px solid #ccc",
            borderRadius: "30px",
            width: "255px",
          }}
          key={item.id}
        >
          <Loupe id={item.id} image={item.photo} />
          <div
            type="button"
            onClick={() => {
              setEtat(item.name);
              updateTimeline(4);
            }}
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
              className="z-100"
              style={{
                position: "absolute",
                marginLeft: "10%",
                marginTop: "0.8%",
              }}
            >
              <OverlayEtat
                title={item.name}
                text={item.description}
                onClick={handleOverlayClick}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Etat;
