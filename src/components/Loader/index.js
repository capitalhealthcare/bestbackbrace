import React from "react";

const loaderStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "rgba(255, 255, 255, 0.5)",
  zIndex: 1000,
};

const spinnerStyle = {
  border: "5px solid #f3f3f3",
  borderTop: "5px solid #3498db",
  borderRadius: "50%",
  width: "50px",
  height: "50px",
  animation: "spin 2s linear infinite",
};

const Loader = () => (
  <div style={loaderStyle}>
    <div style={spinnerStyle}></div>
  </div>
);

export default Loader;
