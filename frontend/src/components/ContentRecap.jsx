import {
  Paper,
  List,
  ListItem,
  ListItemText,
  Typography,
  Divider,
  Button,
} from "@mui/material";
import ModifierButton from "./ModifierButton";

function ContentRecap() {
  const handleClick = (e) => {}; // TODO: handleClick

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
                primary={
                  <Typography variant="h6">iPhone 13 Pro Max</Typography>
                }
              />
              <ModifierButton />
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
                primary={<Typography variant="h6">250 Go</Typography>}
              />
              <ModifierButton />
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
                    Chargeur : oui
                    <br />
                    Ecouteurs : non
                  </Typography>
                }
              />
              <ModifierButton />
            </div>
          </ListItem>
          <Divider light />
          {/* État */}
          <ListItem button>
            <ListItemText
              secondary={<Typography variant="subtitle1">État</Typography>}
            />
            <div className="flex gap-10">
              <ListItemText
                primary={<Typography variant="h6">Parfait état</Typography>}
              />
              <ModifierButton />
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
