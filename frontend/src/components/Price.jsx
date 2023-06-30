import { Paper, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Price() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/home");
  };

  return (
    <div className="w-full">
      <Paper
        elevation={16}
        className="pt-8 pb-16 flex flex-col justify-center items-center"
      >
        <Typography variant="h1" className="text-primary-100 font-medium">
          58€
        </Typography>
        <div className="flex flex-col gap-3 justify-center items-center">
          <Typography variant="h5">212 € économisés / achat neuf</Typography>
          <Typography variant="h5">236 Ko de Co2 non rejetés</Typography>
        </div>{" "}
        <div className="w-full flex justify-center">
          <Button
            variant="contained"
            type="submit"
            size="medium"
            className="bg-primary-50 mt-16"
            onClick={handleClick}
          >
            Okie dokie
          </Button>
        </div>
      </Paper>
    </div>
  );
}

export default Price;
