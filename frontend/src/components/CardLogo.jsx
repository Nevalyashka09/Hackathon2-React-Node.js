import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import AppContext from "./Context/AppContext";

function CardLogo() {
  const { setMarque } = useContext(AppContext);

  const [dataSmartphone, setDataSmartphone] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const smartphoneResponse = await axios.get(
          "http://localhost:6001/api/smartphones"
        );
        setDataSmartphone(smartphoneResponse.data);
      } catch (err) {
        console.warn(err);
      }
    };

    fetchData();
  }, []);

  const handleCardClick = (name) => {
    setMarque(name);
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "30px",
        flexWrap: "wrap",
      }}
    >
      {dataSmartphone.map((card) => (
        <button
          type="button"
          label="salut"
          key={card.smartphones_id}
          style={{
            backgroundImage: `url(${card.logo})`,
            minWidth: "200px",
            height: "200px",
            backgroundSize: "70%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            border: "1px solid black",
            boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
            borderRadius: "30px",
            cursor: "pointer",
          }}
          onClick={() => handleCardClick(card.brand)}
        />
      ))}
    </div>
  );
}

export default CardLogo;
