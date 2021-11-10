import React, { Fragment } from "react";
import { CssBaseline, Text } from "@nextui-org/react";

import arduinoIcon from "./images/arduinoIcon.png";

import ArduinoPage from "./components/ArduinoPage";

import "./styles/ArduinoListener.css";

const ArduinoListener = () => {
  return (
    <Fragment>
      <CssBaseline />
      <div className="MainContainer">
        <div className="header">
          <img src={arduinoIcon} style={{ maxHeight: "65px" }} />
          <div className="text">
            <Text h2 className="mainTitle">
              ESP32 Listener
            </Text>
            <Text small>
              Aplicación web para <strong>integraciones de IOT</strong>
            </Text>
          </div>
        </div>
        <ArduinoPage />
      </div>
    </Fragment>
  );
};

export default ArduinoListener;
