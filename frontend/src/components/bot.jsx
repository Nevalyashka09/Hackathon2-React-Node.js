import ChatBot from "react-simple-chatbot";
import eric from "../assets/images/eric.png";

export default function Bot() {
  return (
    <div>
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: "9999",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            borderRadius: "10px",
            marginBottom: "10px",
          }}
        />
        <ChatBot
          headerTitle="Eric"
          botAvatar={eric}
          floating
          steps={[
            {
              id: "1",
              message: "Bonjour! Comment puis-je vous aider ?",
              trigger: "2",
            },
            {
              id: "2",
              user: true,
              trigger: "3",
            },
            {
              id: "3",
              message: "Ah non, pour ça je n'ai aucune idée",
              trigger: "4",
            },
            {
              id: "4",
              user: true,
              trigger: "5",
            },
            {
              id: "5",
              message: "Laisse-moi tranquille, je regarde le foot",
              end: true,
            },
          ]}
        />
      </div>
    </div>
  );
}
