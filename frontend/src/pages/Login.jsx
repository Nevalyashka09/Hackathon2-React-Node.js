import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

export default function Login() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home");
  };

  return (
    <div>
      <h1 className="text-red-700">Login Page</h1>
      <Button variant="contained" onClick={handleClick}>
        Vers Home
      </Button>
    </div>
  );
}
