import React, { useState } from "react";
import image from "../assets/images/Reparable.png";

function Loupe3() {
  const [loupePosition, setLoupePosition] = useState({
    left: 0,
    top: 0,
  });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const loupe = document.getElementById("loupe");

    setLoupePosition({ left: clientX, top: clientY });
    loupe.style.backgroundSize = `${250 * 2}px`;
    loupe.style.backgroundPosition = `${-loupe.offsetLeft * 2 - 50}px ${
      -loupe.offsetTop * 2 - 300
    }px`;
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const loupeStyle = {
    margin: -20,
    width: "100px",
    height: "100px",
    border: "solid 6px #fff",
    borderRadius: "200px",
    position: "absolute",
    boxShadow: "0 0 10px rgba(0,0,0,0.6)",
    filter: "brightness(1.3)",
    left: loupePosition.left,
    top: loupePosition.top,
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    display: isHovered ? "block" : "none",
  };

  const bodyStyle = {
    padding: "30px",
    minHeight: "15vh",
    maxWidth: "25vh",
    backgroundImage: `url(${image})`,
    backgroundSize: "250px",
    backgroundRepeat: "no-repeat",
    cursor: "none",
    overflow: "hidden",
    borderRadius: "30px",
  };

  return (
    <div
      style={bodyStyle}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div id="loupe" style={loupeStyle} />
    </div>
  );
}

export default Loupe3;
