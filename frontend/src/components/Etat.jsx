import React, { useContext } from "react";
import Loupe from "./Loupe";
import data from "../BaseDeDonnées/Photo";
import OverlayEtat from "./OverlayEtat";
import AppContext from "./Context/AppContext";

function Etat() {
  const { setEtat, updateTimeline } = useContext(AppContext);

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
            role="button"
            tabIndex={0}
            onKeyPress={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setEtat(item.name);
                updateTimeline(4);
              }
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
            <div
              key={item.name}
              role="button"
              className="cursor-pointer"
              onClick={() => {
                setEtat(item.name);
                updateTimeline(4);
              }}
              onKeyPress={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setEtat(item.name);
                  updateTimeline(4);
                }
              }}
            >
              {item.name}
            </div>
            <div
              style={{
                position: "absolute",
                marginLeft: "10%",
              }}
            >
              <OverlayEtat
                className="z-100"
                title={item.name}
                text={item.description}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Etat;
