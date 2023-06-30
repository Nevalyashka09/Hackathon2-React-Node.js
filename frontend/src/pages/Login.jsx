import { Container } from "@mui/material";
import LoginForm from "../components/LoginForm";
import fullLogo from "../assets/Logo.svg";
import comunity from "../assets/images/comunity.png";

function Login() {
  return (
    <div className="h-screen flex">
      <div className="w-7/12">
        <Container className="h-screen bg-primary-800 flex flex-col justify-center">
          <LoginForm className="flex justify-center items-center" />
        </Container>
      </div>

      <div className="relative w-5/12 flex flex-col items-center">
        <img className="w-64 drop-shadow-lg m-20" src={fullLogo} alt="logo" />
        <div className="w-auto h-1/2 lg:h-2/3 absolute bottom-0 -left-8 lg:-left-20">
          <img
            style={{
              position: "absolute",
              height: "550px",
              left: "-95px",
              bottom: "-25px",
            }}
            src={comunity}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
