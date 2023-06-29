import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Typography, Box, Container, Button } from "@mui/material";
import Link from "@mui/material/Link";

function Copyright() {
  return (
    <Typography variant="body2" color="#EBEBEB">
      {"© "}
      {new Date().getFullYear()}
      &nbsp;
      <Link color="inherit" href="https://emmaus-connect.org/" underline="none">
        Emmaüs Connect
      </Link>{" "}
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
          py: 3,
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
              style={{ color: "#EBEBEB", fontWeight: "bold" }}
              component={Link}
              to="/contact"
            >
              Contact
            </Button>
            <Button
              style={{ color: "#EBEBEB", fontWeight: "bold" }}
              component={Link}
              to="/faq"
            >
              FAQ
            </Button>
            <Button
              style={{ color: "#EBEBEB", fontWeight: "bold" }}
              component={Link}
              to="/???"
            >
              ???
            </Button>
          </div>
          <Copyright />
        </Container>
      </Box>
    </ThemeProvider>
  );
}
