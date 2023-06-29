import React from "react";
import { Checkbox, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ContentFonctionalite() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h3 style={{ marginLeft: "15px" }}>
        Le téléphone fonctionne-il correctement ?
      </h3>
      <div style={{ display: "flex", marginTop: "5px" }}>
        <Checkbox label="" />
        <h5>Le téléphone s’allume et l’affichage fonctionne correctement.</h5>
      </div>
      <div style={{ display: "flex", marginTop: "5px" }}>
        <Checkbox label="" />
        <h5>
          Les boutons de volume et d’accueil (si disponible) répondent
          correctement.
        </h5>
      </div>
      <div style={{ display: "flex", marginTop: "5px" }}>
        <Checkbox label="" />
        <h5>Le microphone et le haut-parleur fonctionnent correctement.</h5>
      </div>
      <div style={{ display: "flex", marginTop: "5px" }}>
        <Checkbox label="" />
        <h5>
          Le chargeur fonctionne et la batterie se charge lorsque le téléphone
          est branché.
        </h5>
      </div>
      <div style={{ display: "flex", marginTop: "5px" }}>
        <Checkbox label="" />
        <h5>Bloqué pour un opérateur</h5>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Button
          style={{ marginTop: "30px", maxWidth: "150px" }}
          variant="contained"
          type="submit"
          fullWidth
        >
          confirmer
        </Button>
      </div>
    </div>
  );
}
