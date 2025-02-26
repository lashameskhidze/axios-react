import React from "react";
import "./LeftSideMolecul.css";
import Desktop from "../LeftSide/IMAGES/Desktop.svg";
import DesktopBox from "../LeftSide/IMAGES/DesktopBox.svg";
import DesktopShadow from "../LeftSide/IMAGES/DesktopShadow.svg";

const LeftSideMolecul = () => {
  return (
    <div className="LeftSideMoleculDiv">
      <img className="Desktop" src={Desktop} alt="" />
      <img className="DesktopBox" src={DesktopBox} alt="" />
      <img className="DesktopShadow" src={DesktopShadow} alt="" />
    </div>
  );
};

export default LeftSideMolecul;
