import React, { useContext } from "react";
import AppContext from "./Context/AppContext";

function CardLogo() {
  const { setMarque, setMarqueId, brands, setTimeline } =
    useContext(AppContext);

  const handleCardClick = (card) => {
    console.info(card);
    setMarque(card.name);
    setTimeline(2);
    setMarqueId(card.brands_id);
    console.log("card name est ", card.name);
    console.log("card id est ", card.brands_id);
    console.log("Timeline est ", Timeline);
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
            onClick={() => handleCardClick(card)}
          />
        ))}
    </div>
  );
}

export default CardLogo;
