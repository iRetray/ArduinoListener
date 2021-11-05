import React from "react";
import { Text, Card, Progress } from "@nextui-org/react";
import { HiStatusOnline } from "react-icons/hi";
import { GoPrimitiveDot } from "react-icons/go";
import { SiFirebase } from "react-icons/si";
import { BsFillPeopleFill } from "react-icons/bs";
import { BiExit } from "react-icons/bi";
import { ImEnter } from "react-icons/im";

import { collection } from "firebase/firestore";
import { useFirestore, useFirestoreCollectionData } from "reactfire";

import arduinoBoard from "../images/arduinoBoard.png";
import "../styles/ArduinoPage.css";
import CardInfo from "./CardInfo";

const ArduinoPage = () => {
  const firestore = useFirestore();

  const messagesCollection = collection(firestore, "consoleMessages");
  const { status: statusMessages, data: dataMessages } =
    useFirestoreCollectionData(messagesCollection);

  const logsCollection = collection(firestore, "entryLog");
  const { status: statusLogs, data: dataLogs } =
    useFirestoreCollectionData(logsCollection);

  return (
    <div className="ArduinoPage">
      <Card
        style={{
          width: "fit-content",
          margin: "auto",
          justifyContent: "center",
        }}
      >
        <div style={{ marginTop: "10px" }}>
          <Text h3>Estado actual del Aforo</Text>
          <Text small>
            Teniendo en cuenta un aforo máximo de <strong>100 personas</strong>
          </Text>
          <div style={{ padding: "10px" }}>
            <Text h5>Porcentaje de ocupación</Text>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Progress
                value={dataLogs ? dataLogs[0].actuales : null}
                shadow
                color="primary"
                status="primary"
              />
              <span style={{ fontWeight: "bold", marginLeft: "15px" }}>
                {`${dataLogs ? dataLogs[0].actuales : "0"}%`}
              </span>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexFlow: "wrap",
              justifyContent: "center",
            }}
          >
            <CardInfo
              number={dataLogs ? dataLogs[0].entradas : null}
              title={statusLogs === "success" ? "Ingresos" : "Cargando..."}
              message="Personas que han entrado al centro comercial"
              icon={<ImEnter size={60} fill="#fff" />}
              colorName="success"
            />
            <CardInfo
              number={dataLogs ? dataLogs[0].actuales : null}
              title={statusLogs === "success" ? "Actuales" : "Cargando..."}
              message="Personas actualmente dentro del centro comercial"
              icon={<BsFillPeopleFill size={60} fill="#fff" />}
              colorName="secondary"
            />
            <CardInfo
              number={dataLogs ? dataLogs[0].salidas : null}
              title={statusLogs === "success" ? "Salidas" : "Cargando..."}
              message="Personas que han salido del centro comercial"
              icon={<BiExit size={60} fill="#fff" />}
              colorName="error"
            />
          </div>
        </div>
      </Card>
      <Card
        style={{
          marginTop: "15px",
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
                  {statusMessages === "success"
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
              {dataMessages &&
                dataMessages.map(({ message }, index) => (
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
