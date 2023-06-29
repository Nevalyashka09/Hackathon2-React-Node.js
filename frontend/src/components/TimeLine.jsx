import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import AppContext from "./Context/AppContext";

const steps = [
  "Appareil",
  "Fonctionnalités",
  "Accessoires",
  "État",
  "Récapitulatif",
];

export default function StepperComponent() {
  const { timeline } = useContext(AppContext);

  return (
    <Box className="mt-8" sx={{ width: "100%" }}>
      <Stepper activeStep={timeline} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
