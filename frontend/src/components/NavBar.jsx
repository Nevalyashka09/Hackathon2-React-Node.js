import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import Logo from "../assets/Logo.svg";

function NavBar() {
  return (
    <AppBar position="static" style={{ backgroundColor: "#FBF9F9" }}>
      <Toolbar className="flex justify-between items-center">
        <Typography variant="h6">
          <div className="h-14">
            <img src={Logo} alt="Logo" className="p-1 h-full" />
          </div>
        </Typography>
        <div className="flex gap-5">
          <Button component={Link} to="/estimation" className="text-primary-50">
            Estimer un prix
          </Button>
          <Button component={Link} to="/" className="text-primary-50">
            Déconnexion
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
