import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { MenuItem, Select, Button } from "@mui/material";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

import AppContext from "./Context/AppContext";
import StorageAccordion from "./Stockage";
import RamAccordion from "./Ram";

function CardLogo() {
  const { marqueId, updateTimeline, model, setModel } = useContext(AppContext);
  const [dataSmartphone, setDataSmartphone] = useState([]);
  const [selectedMode, setSelectedMode] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:6001/api/models/${marqueId}`)
      .then((res) => {
        setDataSmartphone(res.data);
      })
      .catch((error) => console.error("error from api.services.fetch", error));
  }, []);

  useEffect(() => {
    console.info("fetched data ", dataSmartphone);
  }, [dataSmartphone]);

  useEffect(() => {
    console.info("selected Model ", model);
  }, [model]);

  const handleModeSelect = (event) => {
    setModel(event.target.value);
  };

  return (
    <div>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Model</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={model}
            label="Model"
            onChange={handleModeSelect}
          >
            {dataSmartphone.map((phone) => (
              <MenuItem key={phone.id} value={phone.model_name}>
                {phone.model_name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <StorageAccordion />
      <RamAccordion />
      <Button
        className="bg-primary-50"
        style={{ marginTop: "50px" }}
        variant="contained"
        type="submit"
        onClick={() => updateTimeline(3)}
      >
        confirmer
      </Button>
      {/* <Accordion>
        <AccordionSummary>
          <Typography>Phone Mode</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Select value={selectedMode} onChange={handleModeSelect}>
            {dataSmartphone.map((phone) => (
              <MenuItem key={phone.id} value={phone.model_name}>
                {phone.model_name}
              </MenuItem>
            ))}
          </Select>
        </AccordionDetails>
      </Accordion> */}
    </div>
  );
}

export default CardLogo;
