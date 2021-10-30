import React from "react";
import { Text, Card } from "@nextui-org/react";
import { HiStatusOnline } from "react-icons/hi";

import arduinoBoard from "../images/arduinoBoard.png";

import "../styles/ArduinoPage.css";

const ArduinoPage = () => {
  return (
    <div className="ArduinoPage">
      <Card style={{ width: "fit-content", margin: "auto" }}>
        <div style={{ padding: "10px" }}>
          <div>
            <Text>
              <strong>Arduino UNO</strong>
            </Text>
            <div style={{ display: "flex", alignItems: "center" }}>
              <HiStatusOnline fill="#52c41a" />
              <Text small style={{ marginLeft: "5px" }}>
                192.168.0.87
              </Text>
            </div>
          </div>
          <center>
            <img
              src={arduinoBoard}
              style={{
                maxWidth: "300px",
                marginTop: "25px",
                marginBottom: "20px",
              }}
            />
          </center>
        </div>
      </Card>
    </div>
  );
};

export default ArduinoPage;
