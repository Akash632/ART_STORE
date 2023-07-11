import React, { useState, useEffect } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import "./Gotobtn.css";

function Gotobtn() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let height = 500;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > height) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener('scroll', listenToScroll);
  }, []);
  return (
    <div className="goto-btn-container">
      {isVisible&&(
        <button onClick={scrollTop} className="goto-btn">
          <ArrowUpwardIcon />
        </button>
      )
      }
    </div>
  );
}

export default Gotobtn;
