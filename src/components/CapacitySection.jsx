import React from "react";

import { Text, Card, Progress } from "@nextui-org/react";
import { BsFillPeopleFill } from "react-icons/bs";
import { BiExit } from "react-icons/bi";
import { ImEnter } from "react-icons/im";

import { ref } from "firebase/database";
import { useDatabase, useDatabaseObjectData } from "reactfire";

import CardInfo from "./CardInfo";

const CapacitySection = () => {
  const database = useDatabase();

  const actualesRef = ref(database, "actuales");
  const { status: actualesStatus, data: actualesData } =
    useDatabaseObjectData(actualesRef);

  const entradasRef = ref(database, "entradas");
  const { status: entradasStatus, data: entradasData } =
    useDatabaseObjectData(entradasRef);

  const salidasRef = ref(database, "salidas");
  const { status: salidasStatus, data: salidasData } =
    useDatabaseObjectData(salidasRef);

  /* const firestore = useFirestore();
  const logsCollection = collection(firestore, "entryLog");
  const { status: statusLogs, data: dataLogs } =
    useFirestoreCollectionData(logsCollection); */

  return (
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
              value={actualesData ? actualesData : null}
              shadow
              color="primary"
              status="primary"
            />
            <span style={{ fontWeight: "bold", marginLeft: "15px" }}>
              {`${actualesData ? actualesData : "0"}%`}
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
            number={entradasData ? entradasData : null}
            title={entradasStatus === "success" ? "Ingresos" : "Cargando..."}
            message="Personas que han entrado al centro comercial"
            icon={<ImEnter size={60} fill="#fff" />}
            colorName="success"
          />
          <CardInfo
            number={actualesData ? actualesData : null}
            title={actualesStatus === "success" ? "Actuales" : "Cargando..."}
            message="Personas actualmente dentro del centro comercial"
            icon={<BsFillPeopleFill size={60} fill="#fff" />}
            colorName="secondary"
          />
          <CardInfo
            number={salidasData ? salidasData : null}
            title={salidasStatus === "success" ? "Salidas" : "Cargando..."}
            message="Personas que han salido del centro comercial"
            icon={<BiExit size={60} fill="#fff" />}
            colorName="error"
          />
        </div>
      </div>
    </Card>
  );
};

export default CapacitySection;
