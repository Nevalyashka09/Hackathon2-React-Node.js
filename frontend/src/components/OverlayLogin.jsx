import { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  Box,
  DialogActions,
  Snackbar,
  Alert,
} from "@mui/material";

function OverlayLogin() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const validateEmail = (emailInput) => {
    // Regular expression for email validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(emailInput);
  };

  const handleEmailChange = (e) => {
    const inputValue = e.target.value;
    setEmail(inputValue);
    setEmailError(!validateEmail(inputValue));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && validateEmail(email)) {
      setAlertMessage("Un nouveau mot de passe vous a été envoyé par mail.");
      setShowAlert(true);
      setOpen(false);
    } else {
      setEmailError(!validateEmail(email));
    }
  };

  const handleCloseAlert = (e, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setShowAlert(false);
  };

  return (
    <div className="flex justify-end pb-4">
      <Button variant="text" onClick={handleClickOpen}>
        <span
          style={{
            textTransform: "lowercase",
            color: "#000000DE",
            fontSize: "16px",
          }}
        >
          <span style={{ textTransform: "capitalize" }}>Mot</span> de passe
          oublié ?
        </span>
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Mot de passe oublié ?</DialogTitle>
        <DialogContent>
          <DialogContentText style={{ margin: "24px 0" }}>
            <span>
              Veuillez renseigner l'adresse mail associée à votre compte. Si
              elle existe nous vous enverrons un nouveau mot de passse.
            </span>
            <TextField
              id="forgot-password-email"
              type="email"
              label="Adresse mail"
              name="email"
              value={email}
              onChange={handleEmailChange}
              error={emailError}
              helperText={emailError ? "Email address is invalid." : ""}
              variant="outlined"
              required
              fullWidth
              style={{ marginTop: "24px" }}
            />
          </DialogContentText>
          <Box noValidate component="form" />
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            type="submit"
            fullWidth
            onClick={handleSubmit}
            style={{ margin: "0 16px 16px 16px" }}
          >
            Continuer
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={showAlert}
        autoHideDuration={4000}
        onClose={handleCloseAlert}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        {showAlert && (
          <Alert
            variant="filled"
            severity="success"
            onClose={() => setShowAlert(false)}
          >
            {alertMessage}
          </Alert>
        )}
      </Snackbar>
    </div>
  );
}

export default OverlayLogin;
