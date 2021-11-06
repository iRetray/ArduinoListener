import React from "react";

import "../styles/ArduinoPage.css";

import CapacitySection from "./CapacitySection";
import BoardConsole from "./BoardConsole";

const ArduinoPage = () => {
  return (
    <div className="ArduinoPage">
      <CapacitySection />
      <BoardConsole />
    </div>
  );
};

export default ArduinoPage;
