import React, { useState } from "react";
import "./Carousal.css";
import slider1 from "../../../assets/slider1.png";
import slider2 from "../../../assets/slider2.png";
import slider3 from "../../../assets/slider3.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
function Carousal() {
  const carousalimages = [slider1, slider2, slider3];
  const [index, setIndex] = useState(0);

  return (
    <div className="carousal-bg-container">
      <img src={carousalimages[index]} className="carousal-image" />
      <div className="carousal-btn-container">
        {index <= 0 ? (
          <button onClick={() => setIndex(2)}>
            <ArrowBackIosIcon style={{ fontSize: "15px" }} />
          </button>
        ) : (
          <button onClick={() => setIndex(index - 1)}>
            <ArrowBackIosIcon style={{ fontSize: "15px" }} />
          </button>
        )}
        {index >= 2 ? (
          <button onClick={() => setIndex(0)}>
            <ArrowForwardIosIcon style={{ fontSize: "15px" }} />
          </button>
        ) : (
          <button onClick={() => setIndex(index + 1)}>
            <ArrowForwardIosIcon style={{ fontSize: "15px" }} />
          </button>
        )}
      </div>
      <div className="carousal-btn-container-small">
        {index <= 0 ? (
          <button onClick={() => setIndex(2)}>
            <ArrowBackIosIcon style={{ fontSize: "10px" }} />
          </button>
        ) : (
          <button onClick={() => setIndex(index - 1)}>
            <ArrowBackIosIcon style={{ fontSize: "10px" }} />
          </button>
        )}
        {index >= 2 ? (
          <button onClick={() => setIndex(0)}>
            <ArrowForwardIosIcon style={{ fontSize: "10px" }} />
          </button>
        ) : (
          <button onClick={() => setIndex(index + 1)}>
            <ArrowForwardIosIcon style={{ fontSize: "10px" }} />
          </button>
        )}
      </div>
    </div>
  );
}

export default Carousal;
