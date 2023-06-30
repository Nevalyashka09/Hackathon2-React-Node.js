import { Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Tree from "../assets/Tree.png";

function CardImpactAppareils() {
  const [isBouncing, setIsBouncing] = useState(false);

  useEffect(() => {
    setIsBouncing(true);
    const timer = setTimeout(() => setIsBouncing(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-56">
      <Paper
        elevation={6}
        className={`p-5 flex flex-col justify-center items-center -z-20${
          isBouncing ? "bounce" : ""
        }`}
        style={{ borderRadius: "16px", height: "400px", width: "370px" }}
      >
        <div className="flex flex-col justify-center items-center z-10">
          <Typography variant="h1" className="text-primary-100">
            <strong>5 345</strong>
          </Typography>
          <Typography variant="h5" className="mt-10">
            <strong>tonnes de</strong>
          </Typography>
          <Typography variant="h5">
            <strong>CO2 non rejetés</strong>
          </Typography>
        </div>
        <img
          src={Tree}
          alt="arbre"
          className="h-80 -z-0 absolute mt-40 ml-72 opacity-30"
        />
        <img
          src={Tree}
          alt="arbre"
          className="h-56 -z-0 absolute mt-60 -ml-5 opacity-20"
        />
        <img
          src={Tree}
          alt="arbre"
          className="h-56 -z-0 absolute mt-44 ml-44 opacity-20"
        />
        <img
          src={Tree}
          alt="arbre"
          className="h-72 -z-0 absolute mt-32 -ml-60 opacity-30"
        />
      </Paper>
    </div>
  );
}

export default CardImpactAppareils;
