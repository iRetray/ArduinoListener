import React from "react";
import { Text, Card } from "@nextui-org/react";
import { HiStatusOnline } from "react-icons/hi";
import { GoPrimitiveDot } from "react-icons/go";
import { SiFirebase } from "react-icons/si";

import { collection } from "firebase/firestore";
import { useFirestore, useFirestoreCollectionData } from "reactfire";

import arduinoBoard from "../images/arduinoBoard.png";
import "../styles/ArduinoPage.css";

const ArduinoPage = () => {
  const firestore = useFirestore();
  const messagesCollection = collection(firestore, "consoleMessages");
  const { status, data } = useFirestoreCollectionData(messagesCollection);

  return (
    <div className="ArduinoPage">
      <Card
        style={{
          width: "fit-content",
          margin: "auto",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexFlow: "wrap",
            justifyContent: "center",
          }}
        >
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
          <div className="consoleContainer">
            <div className="headerConsole">
              <div style={{ display: "flex", alignItems: "center" }}>
                <SiFirebase style={{ marginRight: "10px" }} />
                <span>
                  {status === "success"
                    ? "Conectado a Firebase"
                    : "Cargando..."}
                </span>
              </div>
              <div>
                <GoPrimitiveDot color="#FF5F5A" size={30} className="dot" />
                <GoPrimitiveDot color="#FFBE2E" size={30} className="dot" />
                <GoPrimitiveDot color="#2ACA44" size={30} className="dot" />
              </div>
            </div>
            <div style={{ marginTop: "10px" }}>
              {data &&
                data.map(({ message }, index) => (
                  <p key={index} className="lineConsole">
                    <span className="number">{index + 1}</span>
                    {message}
                  </p>
                ))}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ArduinoPage;
