import { Link, useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import Logo from "../assets/Logo.svg";

function NavBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <AppBar position="static" style={{ backgroundColor: "#FBF9F9" }}>
      <Toolbar className="flex justify-between items-center">
        <Typography variant="h6">
          <div className="h-14">
            <img src={Logo} alt="Logo" className="p-1 h-full" />
          </div>
        </Typography>
        <div>
          <Button style={{ color: "#CF2E79" }} component={Link} to="/estimate">
            Estimer un prix
          </Button>
          <Button style={{ color: "#CF2E79" }} component={Link} to="/help">
            Aide
          </Button>
          <Button style={{ color: "#CF2E79" }} onClick={handleLogout}>
            Déconnexion
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
