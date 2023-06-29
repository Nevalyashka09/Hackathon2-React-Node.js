import React from "react";
import { ThemeProvider } from "styled-components";
import Bot from "./Bot";

const theme = {
  background: "#f5f8fb",
  fontFamily: "Rubik",
  headerBgColor: "#A5C444",
  headerFontColor: "#fff",
  headerFontSize: "20px",
  botBubbleColor: "#A5C444",
  botFontColor: "#fff",
  userBubbleColor: "#A5C444",
  userFontColor: "#fff",
};

const steps = [
  {
    id: "1",
    message: "Hello World",
    end: true,
  },
];

function ThemedExample() {
  return (
    <ThemeProvider theme={theme}>
      <Bot steps={steps} />;
    </ThemeProvider>
  );
}

export default ThemedExample;
