import { Paper, Typography } from "@mui/material";
import Hands from "../assets/Hands.png";

function CardImpactAppareils() {
  return (
    <div>
      <Paper
        elevation={6}
        className="p-5 flex flex-col justify-center items-center animate-fall"
        style={{ borderRadius: "16px", height: "350px", width: "370px" }}
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
