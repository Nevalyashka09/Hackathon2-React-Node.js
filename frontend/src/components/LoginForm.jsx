import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Paper,
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import OverlayLogin from "./OverlayLogin";

function LoginForm() {
  const [mail, setMail] = useState("");
  const [mailError, setMailError] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const navigate = useNavigate();

  const validateMail = (mailInput) => {
    const mailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return mailRegex.test(mailInput);
  };

  const handleMailChange = (e) => {
    const inputValue = e.target.value;
    setMail(inputValue);
    setMailError(!validateMail(inputValue));
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Check if all fields are filled out
    if (mail === "" || password === "") {
      setAlertMessage("Veuillez remplir tous les champs !");
      setShowAlert(true);
    } else {
      try {
        // Make the HTTP request to backend API
        const response = await axios.post(
          "http://localhost:6001/api/users/login",
          { mail, password }
        );
        console.info(response.data);
        navigate("/");
      } catch (error) {
        if (error.response) {
          const { status } = error.response;
          if (status === 401) {
            setAlertMessage("Adresse mail ou mot de passe incorrects.");
            setShowAlert(true);
          } else if (status === 404) {
            setAlertMessage(
              "Utilisateur pas trouvé. Veuillez contacter votre administrateur."
            );
            setShowAlert(true);
          } else {
            setAlertMessage(
              "Erreur interne du serveur. Veuillez réessayer ultérieurement."
            );
            setShowAlert(true);
          }
        } else {
          setAlertMessage(
            "Erreur de réseau. Veuillez réessayer ultérieurement."
          );
          setShowAlert(true);
        }
      }
    }
  };

  const handleCloseAlert = (e, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setShowAlert(false);
  };

  return (
    <div className="flex justify-center">
      <Paper elevation={6} className="p-5 max-w-sm">
        <h2 className="text-center">Se connecter</h2>
        <p className="my-8 text-center">
          Veuillez renseigner vos coordonnées de connexion.
        </p>
        <TextField
          id="login-mail"
          type="mail"
          label="Adresse mail"
          name="mail"
          value={mail}
          autoComplete="mail"
          autoFocus
          onChange={handleMailChange}
          error={mailError}
          helperText={
            mailError ? "Veuillez renseigner une addresse mail valide." : ""
          }
          variant="outlined"
          required
          fullWidth
          className=""
        />
        <FormControl
          variant="outlined"
          required
          fullWidth
          className="mt-4 mb-2"
        >
          <InputLabel htmlFor="outlined-adornment-password">
            Mot de passe
          </InputLabel>
          <OutlinedInput
            id="login-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </FormControl>
        <OverlayLogin />
        <Button
          variant="contained"
          type="submit"
          fullWidth
          className="mt-4"
          onClick={handleSubmit}
        >
          Valider
        </Button>
      </Paper>
      <Snackbar
        open={showAlert}
        autoHideDuration={3000}
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
  );
}

export default LoginForm;
