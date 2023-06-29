import React, { useState, useContext, useEffect } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import AppContext from "./Context/AppContext";
import fetch from "../services.js/api.services";

export default function StepperComponent() {
  const [brands, setBrands] = useState([]);
  const [storage, setStorage] = useState([]);
  const [rams, setRams] = useState([]);
  const [models, setModels] = useState([]);

  const { timeline } = useContext(AppContext);

  const steps = [
    "Appareil",
    "Fonctionnalités",
    "Accessoires",
    "État",
    "Récapitulatif",
  ];

  useEffect(() => {
    fetch("brands", setBrands);
    fetch("storages", setStorage);
    fetch("rams", setRams);
    fetch("models", setModels);
  }, []);

  useEffect(() => {
    console.info("brands", brands);
  }, [brands]);

  useEffect(() => {
    console.info("storages", storage);
  }, [storage]);

  useEffect(() => {
    console.info("rams", rams);
  }, [rams]);

  useEffect(() => {
    console.info("models", models);
  }, [models]);

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
