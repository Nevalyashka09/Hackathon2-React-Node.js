import React, { useContext, useEffect, useState } from "react";
import { MenuItem, Select } from "@mui/material";
import axios from "axios";
import Context from "./Context/AppContext";

function CardLogo() {
  const [dataModel, setDataModel] = useState([]);
  const [selectedMode, setSelectedMode] = useState("");
  const { marque } = useContext(Context);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const modelResponse = await axios.get(
          "http://localhost:6001/api/models"
        );
        setDataModel(modelResponse.data);
      } catch (err) {
        console.warn(err);
      }
    };

    fetchData();
  }, []);

  const handleModeSelect = (event) => {
    setSelectedMode(event.target.value);
  };
  console.info(dataModel[0]);
  console.info(marque);
  return (
    <div
      style={{
        backgroundColor: "white",
      }}
    >
      <Select
        style={{ width: "100%" }}
        value={selectedMode}
        onChange={handleModeSelect}
      >
        {dataModel.map((model) => (
          <MenuItem key={model.models_id} value={model.model_name}>
            {model.brand_name === marque ? model.model_name : null}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
}

export default CardLogo;
