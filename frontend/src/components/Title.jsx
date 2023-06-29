import PropTypes from "prop-types";

export default function Title({ text }) {
  return (
    <div
      style={{
        justifyContent: "center",
        marginTop: "100px",
      }}
    >
      <h3>{text}</h3>
    </div>
  );
}

Title.propTypes = {
  text: PropTypes.string.isRequired,
};
