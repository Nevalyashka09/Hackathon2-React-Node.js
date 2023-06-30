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
    <div className="flex flex-col gap-4 items-center">
      <Box sx={{ width: 500 }}>
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
      <h4>Espace de Stockage du téléphone</h4>
      <StorageAccordion />
      <h4>RAM du téléphone</h4>
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
    </div>
  );
}

export default CardLogo;
