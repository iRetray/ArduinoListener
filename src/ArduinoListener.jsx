import React, { Fragment, useEffect, useState } from "react";
import { CssBaseline } from "@nextui-org/react";

import { Text } from "@nextui-org/react";

import arduinoIcon from "./images/arduinoIcon.png";

import FirebaseService from "./services/FirebaseService";

import ArduinoPage from "./components/ArduinoPage";
import NoConnection from "./components/NoConnection";

import "./styles/ArduinoListener.css";

const ArduinoListener = () => {
  const [isArduinoConnected, setIsArduinoConnected] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setIsArduinoConnected(true);
      FirebaseService.getConsoleMessages();
    }, 5000);
  }, []);

  return (
    <Fragment>
      <CssBaseline />
      <div className="MainContainer">
        <div className="header">
          <img src={arduinoIcon} style={{ maxHeight: "65px" }} />
          <div className="text">
            <Text h2 className="mainTitle">
              Arduino Listener
            </Text>
            <Text small>
              Aplicación web para <strong>integraciones de IOT</strong>
            </Text>
          </div>
        </div>
        {isArduinoConnected ? <ArduinoPage /> : <NoConnection />}
      </div>
    </Fragment>
  );
};

export default ArduinoListener;
