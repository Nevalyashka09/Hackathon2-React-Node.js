import { Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Hands from "../assets/Hands.png";

function CardImpactAppareils() {
  const [isBouncing, setIsBouncing] = useState(false);

  useEffect(() => {
    setIsBouncing(true);
    const timer = setTimeout(() => setIsBouncing(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Paper
        elevation={6}
        className={`p-5 flex flex-col justify-center items-center ${
          isBouncing ? "bounce" : ""
        }`}
        style={{ borderRadius: "16px", height: "400px", width: "370px" }}
      >
        <div className="flex flex-col justify-center items-center">
          <Typography variant="h1" className="text-primary-50">
            <strong>367</strong>
          </Typography>
          <Typography variant="h5" className="mt-24">
            <strong>Appareils enregistrés</strong>
          </Typography>
        </div>
        <img
          src={Hands}
          alt="main"
          className="mt-5 -z-0 absolute opacity-30"
          style={{ width: "370px" }}
        />
      </Paper>
    </div>
  );
}

export default CardImpactAppareils;
