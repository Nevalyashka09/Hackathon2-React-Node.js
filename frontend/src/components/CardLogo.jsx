import React, { useEffect, useState } from "react";
import axios from "axios";

function CardLogo() {
  const [dataSmartphone, setDataSmartphone] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postsResponse = await axios.get("http://localhost:5001/posts");
        setDataSmartphone(postsResponse.data);
      } catch (err) {
        console.warn(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {dataSmartphone.map((card, index) => {
        return (
          <div
            style={{
              backgroundImage: `url(${card[index].logo})`,
            }}
          />
        );
      })}
    </div>
  );
}

export default CardLogo;
