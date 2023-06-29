import { useState, useEffect } from "react";
import ChatBot from "react-simple-chatbot";
import eric from "../assets/images/eric.png";
import Button from '@mui/material/Button';

export default function Bot() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timeoutId);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <div>
      {isVisible && (
        <div className="chatBotDiv">
          <div className="chatButtonDiv">
            <Button className="w-4" onClick={handleClose}>
              x
            </Button>
          </div>
          <ChatBot
            headerTitle="Eric"
            botAvatar={eric}
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
                message: "Ah no, pour ça aucun idée",
                trigger: "4",
              },
              {
                id: "4",
                user: true,
                trigger: "5",
              },
              {
                id: "5",
                message: "Laisse moi tranqille, je regarde le foot",
                end: true,
              },
            ]}
          />
        </div>
      )}
    </div>
  );
}
