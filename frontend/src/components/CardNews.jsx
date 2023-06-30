import {
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import WelcomeImage from "../assets/WelcomeImage.jpeg";

export default function ImgMediaCard() {
  return (
    <Card sx={{ maxWidth: 250, maxHeight: 260 }}>
      <CardMedia
        sx={{ maxWidth: 250, maxHeight: 100 }}
        component="img"
        alt="green iguana"
        image={WelcomeImage}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Titre
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur adipis. Lorem ipsum dolor sit
          amet.
        </Typography>
      </CardContent>
      <Button size="small" className="text-primary-50">
        Plus
      </Button>
    </Card>
  );
}
