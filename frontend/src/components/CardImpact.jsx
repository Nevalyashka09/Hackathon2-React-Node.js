import { Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";

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
        className={`p-5 ${isBouncing ? "bounce" : ""}`}
        style={{ borderRadius: "16px" }}
      >
        <div className="flex flex-col justify-center items-center">
          <Typography variant="h4" className="text-primary-50">
            <strong>367</strong>
          </Typography>
          <Typography variant="body1">
            <strong>Appareils enregistrés</strong>
          </Typography>
          <Typography variant="body1" className="text-white">
            <strong>Appareils enregistrés</strong>
          </Typography>
        </div>
      </Paper>
    </div>
  );
}

export default CardImpactAppareils;
