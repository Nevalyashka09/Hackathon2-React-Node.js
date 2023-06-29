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
          headerTitle=""
          botAvatar={eric}
          floating
          placeholder="Votre message"
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
              message:
                "La RAM est une forme de mémoire utilisée par les telephones pour stocker temporairement les données en cours d'utilisation.",
              trigger: "4",
            },
            {
              id: "4",
              user: true,
              trigger: "5",
            },
            {
              id: "5",
              message: "Vous êtes les meilleurs.",
              end: true,
            },
          ]}
        />
      </div>
    </div>
  );
}
