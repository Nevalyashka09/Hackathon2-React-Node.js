import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  MenuItem,
  Select,
} from "@mui/material";
import axios from "axios";

function CardLogo() {
  const [dataSmartphone, setDataSmartphone] = useState([]);
  const [selectedMode, setSelectedMode] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const smartphoneResponse = await axios.get(
          "http://localhost:6001/api/smartphones"
        );
        setDataSmartphone(smartphoneResponse.data);
      } catch (err) {
        console.warn(err);
      }
    };

    fetchData();
  }, []);

  const handleModeSelect = (event) => {
    setSelectedMode(event.target.value);
  };

  return (
    <div>
      <Accordion>
        <AccordionSummary>
          <Typography>Phone Mode</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Select value={selectedMode} onChange={handleModeSelect}>
            {dataSmartphone.map((phone) => (
              <MenuItem key={phone.id} value={phone.model}>
                {phone.model}
              </MenuItem>
            ))}
          </Select>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default CardLogo;
