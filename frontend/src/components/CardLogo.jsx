import React, { useContext } from "react";
import AppContext from "./Context/AppContext";

function CardLogo() {
  const { setMarque, brands, setTimeline } = useContext(AppContext);

  const handleCardClick = (name) => {
    setMarque(name);
    setTimeline(1);
    console.log(name);
    console.log(Timeline);
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "25px",
        flexWrap: "wrap",
      }}
    >
      {brands !== undefined &&
        brands.map((card) => (
          <button
            type="button"
            label="salut"
            key={card.brands_id}
            style={{
              backgroundImage: `url(${card.imgUrl})`,
              minWidth: "200px",
              height: "200px",
              backgroundSize: "70%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
              borderRadius: "30px",
              cursor: "pointer",
            }}
            onClick={() => handleCardClick(card.name)}
          />
        ))}
    </div>
  );
}

export default CardLogo;
