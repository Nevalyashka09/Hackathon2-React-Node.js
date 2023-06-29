import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

function Loupe({ id, image }) {
  const [loupePosition, setLoupePosition] = useState({
    left: 0,
    top: -50,
  });
  const [isClicked, setIsClicked] = useState(false);
  const [isCursorVisible, setIsCursorVisible] = useState(true);

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const loupe = document.getElementById(`loupe-${id}`);

    const loupeSize = 150;

    const loupeX = clientX - loupeSize / 2;
    const loupeY = clientY - loupeSize / 2;

    setLoupePosition({ left: loupeX, top: loupeY });

    loupe.style.backgroundSize = `${300 * 2}px`;
    loupe.style.backgroundPosition = `${-loupe.offsetLeft * 2 - 50}px ${
      -loupe.offsetTop * 2 - 300
    }px`;
  };

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const handleMouseEnter = () => {
    setIsCursorVisible(false);
  };

  const handleMouseLeave = () => {
    setIsCursorVisible(true);
  };

  const loupeStyle = {
    margin: -20,
    width: "150px",
    height: "150px",
    border: "solid 6px #fff",
    borderRadius: "200px",
    position: "absolute",
    boxShadow: "0 0 10px rgba(0,0,0,0.6)",
    filter: "brightness(1.3)",
    left: loupePosition.left,
    top: loupePosition.top,
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    display: isClicked ? "block" : "none",
    transform: "translate(-10%, -10%)",
  };

  const bodyStyle = {
    padding: "30px",
    minHeight: "15vh",
    maxWidth: "30vw",
    backgroundImage: `url(${image})`,
    backgroundSize: "255px",
    backgroundRepeat: "no-repeat",
    cursor: isCursorVisible ? "auto" : "none",
    overflow: "hidden",
    borderRadius: "30px 30px 0 0",
  };

  useEffect(() => {
    document.body.style.cursor = isCursorVisible ? "auto" : "none";
  }, [isCursorVisible]);

  return (
    <div
      style={bodyStyle}
      onMouseMove={handleMouseMove}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onKeyDown={handleClick}
      role="button"
      tabIndex={0}
    >
      <div id={`loupe-${id}`} style={loupeStyle} />{" "}
    </div>
  );
}

Loupe.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Loupe;
