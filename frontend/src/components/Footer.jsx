import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Typography, Box, Container, Button } from "@mui/material";
import { Link } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" className="text-primary-900">
      {"© "}
      {new Date().getFullYear()}
      &nbsp;
      <Link
        color="inherit"
        href="https://emmaus-connect.org/"
        underline="none"
        className="text-primary-900"
      >
        Emmaüs Connect
      </Link>
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function StickyFooter() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Box
        component="footer"
        sx={{
          py: 0.5,
          px: 2,
          mt: "auto",
          backgroundColor: "#275E7F",
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
        }}
      >
        <Container className="flex flex-col justify-center items-center">
          <div>
            <Button
              component={Link}
              to="/contact"
              className="text-primary-900 font-bold"
            >
              Contact
            </Button>
            <Button
              component={Link}
              to="/faq"
              className="text-primary-900 font-bold"
            >
              FAQ
            </Button>
          </div>
          <Copyright />
        </Container>
      </Box>
    </ThemeProvider>
  );
}
