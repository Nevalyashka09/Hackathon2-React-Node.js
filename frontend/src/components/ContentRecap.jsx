import { useContext } from "react";
import {
  Paper,
  List,
  ListItem,
  ListItemText,
  Typography,
  Divider,
  Button,
} from "@mui/material";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import AppContext from "./Context/AppContext";
import ModifierButton from "./ModifierButton";

function ContentRecap() {
  const { model, stockage, etat, chargerDeviceWorks, updateTimeline } =
    useContext(AppContext);
  console.info("model est", model);
  const handleClick = () => {
    updateTimeline(6);
  };

  const handleClickData = () => {
    updateTimeline(2);
  };

  return (
    <div className="w-full">
      <Paper elevation={16} className="p-5">
        <List component="nav" aria-label="recap-items">
          {/* Modèle */}
          <ListItem button>
            <ListItemText
              secondary={<Typography variant="subtitle1">Modèle</Typography>}
            />
            <div className="flex gap-10">
              <ListItemText
                primary={<Typography variant="h6">{model}</Typography>}
              />
              <button
                type="button"
                className="rounded-full w-10 h-10 bg-secondary-600 border-none cursor-pointer"
                onClick={() => updateTimeline(1)}
              >
                <PencilSquareIcon className="text-white h-6 w-6" />
              </button>
            </div>
          </ListItem>
          <Divider />
          {/* Capacité */}
          <ListItem button>
            <ListItemText
              secondary={<Typography variant="subtitle1">Capacité</Typography>}
            />
            <div className="flex gap-10">
              <ListItemText
                primary={<Typography variant="h6">{stockage}</Typography>}
              />
              <button
                type="button"
                className="rounded-full w-10 h-10 bg-secondary-600 border-none cursor-pointer"
                onClick={() => updateTimeline(2)}
              >
                <PencilSquareIcon className="text-white h-6 w-6" />
              </button>
            </div>
          </ListItem>
          {/* Accessoires */}
          <ListItem button>
            <ListItemText
              secondary={
                <Typography variant="subtitle1">Accessoires fournis</Typography>
              }
            />
            <div className="flex gap-10">
              <ListItemText
                primary={
                  <Typography variant="h6">
                    Chargeur :
                    {chargerDeviceWorks ? <span> Oui</span> : <span> Non</span>}
                  </Typography>
                }
              />
              <button
                type="button"
                className="rounded-full w-10 h-10 bg-secondary-600 border-none cursor-pointer"
                onClick={() => updateTimeline(3)}
              >
                <PencilSquareIcon className="text-white h-6 w-6" />
              </button>
            </div>
          </ListItem>
          <Divider light />
          <ListItem button>
            <ListItemText
              secondary={<Typography variant="subtitle1">État</Typography>}
            />
            <div className="flex gap-10">
              <ListItemText
                primary={<Typography variant="h6">{etat}</Typography>}
              />
              <button
                type="button"
                className="rounded-full w-10 h-10 bg-secondary-600 border-none cursor-pointer"
                onClick={() => updateTimeline(4)}
              >
                <PencilSquareIcon className="text-white h-6 w-6" />
              </button>
            </div>
          </ListItem>
        </List>
      </Paper>
      <div className="w-full flex justify-center">
        <Button
          variant="contained"
          type="submit"
          size="medium"
          className="bg-primary-50 mt-10"
          onClick={handleClick}
        >
          Voir l'estimation
        </Button>
      </div>
    </div>
  );
}

export default ContentRecap;
