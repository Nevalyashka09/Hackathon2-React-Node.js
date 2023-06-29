import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import AppContext from "./Context/AppContext";

export default function StepperComponent() {
  const { timeline } = useContext(AppContext);

  const steps = [
    "Fonctionnalités",
    "Données",
    "Accessoires",
    "État",
    "Récapitulatif",
  ];

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
