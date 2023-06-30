import { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Box,
} from "@mui/material";
import PropTypes from "prop-types";
import Info from "../assets/Info.svg";

function OverlayEtat({ title, text }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="flex justify-center">
      <Button variant="text" onClick={handleClickOpen}>
        <img src={Info} alt="info" />
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText style={{ margin: "24px 0" }}>
            <span>{text}</span>
          </DialogContentText>
          <Box noValidate component="form" />
        </DialogContent>
      </Dialog>
    </div>
  );
}

OverlayEtat.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default OverlayEtat;
