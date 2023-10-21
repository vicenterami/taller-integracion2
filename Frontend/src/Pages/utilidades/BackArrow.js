import React from "react";
import { useNavigate } from "react-router-dom";

const ArrowComponent = ({ to }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <div
      className="arrow-container"
      style={{
        width: "60px",
        height: "60px",
        backgroundColor: "#00aaf0",
        borderRadius: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
      }}
      onClick={handleClick}
    >
      <div
        className="arrow"
        style={{
          width: "0",
          height: "0",
          borderTop: "20px solid transparent",
          borderBottom: "20px solid transparent",
          borderRight: "20px solid white",
        }}
      ></div>
      <div
        style={{
          width: "20px",
          height: "15px",
          backgroundColor: "white",
        }}
      ></div>
    </div>
  );
};

export default ArrowComponent;
