import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Checkbox, Button, Alert, Snackbar } from "@mui/material";
import AppContext from "./Context/AppContext";

export default function ContentFonctionalite() {
  const navigate = useNavigate();
  const [alertMessage, setAlertMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const { isBlocked, setIsBlocked, updateTimeline } = useContext(AppContext);
  const [isChecked, setIsChecked] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
    checkbox5: false,
  });

  const handleCheckboxChange = (checkbox) => {
    setIsChecked((prevState) => ({
      ...prevState,
      [checkbox]: !prevState[checkbox],
    }));
  };

  const handleConfirmClick = () => {
    if (
      !isChecked.checkbox1 ||
      !isChecked.checkbox2 ||
      !isChecked.checkbox3 ||
      !isChecked.checkbox4
    ) {
      setAlertMessage(
        "Malheureusement, le téléphone n'est pas fonctionnel, il ne peut pas être vendu !"
      );
      setShowAlert(true);
    } else {
      if (isChecked.checkbox5) {
        setIsBlocked(true);
      }
      updateTimeline(1);
      console.info(isBlocked);
    }
  };
  const handleCloseAlert = (e, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setShowAlert(false);
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h5 style={{ marginLeft: "15px" }}>
        Le téléphone fonctionne-il correctement ?
      </h5>

      <div style={{ display: "flex", marginTop: "15px", alignItems: "center" }}>
        <Checkbox
          label=""
          checked={isChecked.checkbox1}
          onChange={() => handleCheckboxChange("checkbox1")}
        />
        <p>Le téléphone s’allume et l’affichage fonctionne correctement.</p>
      </div>

      <div style={{ display: "flex", marginTop: "5px", alignItems: "center" }}>
        <Checkbox
          label=""
          checked={isChecked.checkbox2}
          onChange={() => handleCheckboxChange("checkbox2")}
        />
        <p>
          Les boutons de volume et d’accueil (si disponible) répondent
          correctement.
        </p>
      </div>

      <div style={{ display: "flex", marginTop: "5px", alignItems: "center" }}>
        <Checkbox
          label=""
          checked={isChecked.checkbox3}
          onChange={() => handleCheckboxChange("checkbox3")}
        />
        <p>Le microphone et le haut-parleur fonctionnent correctement.</p>
      </div>

      <div style={{ display: "flex", marginTop: "5px", alignItems: "center" }}>
        <Checkbox
          label=""
          checked={isChecked.checkbox4}
          onChange={() => handleCheckboxChange("checkbox4")}
        />
        <p>
          Le chargeur fonctionne et la batterie se charge lorsque le téléphone
          est branché.
        </p>
      </div>
      <div style={{ display: "flex", marginTop: "5px", alignItems: "center" }}>
        <Checkbox
          label=""
          checked={isChecked.checkbox5}
          onChange={() => handleCheckboxChange("checkbox5")}
        />
        <p>Bloqué pour un opérateur.</p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Button
          className="bg-primary-50"
          style={{ marginTop: "50px" }}
          variant="contained"
          type="submit"
          onClick={handleConfirmClick}
        >
          confirmer
        </Button>
        <Snackbar
          style={{ marginTop: "150px" }}
          open={showAlert}
          onClose={handleCloseAlert}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          {showAlert && (
            <Alert
              variant="filled"
              severity="error"
              onClose={() => setShowAlert(false)}
            >
              {alertMessage}
            </Alert>
          )}
        </Snackbar>
      </div>
    </div>
  );
}
