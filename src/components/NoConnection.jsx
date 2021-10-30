import React from "react";

import { Text, Card, Button, Loading } from "@nextui-org/react";
import { SiFirebase } from "react-icons/si";

const NoConnection = () => {
  return (
    <div className="noConnection">
      <Card style={{ width: "fit-content", margin: "auto" }}>
        <div className="internalCard">
          <center style={{ padding: "30px" }}>
            <Loading size="xlarge" type="points" />
            <Text h6 style={{ marginTop: "20px" }}>
              Esperando conexión del Arduino
            </Text>
          </center>
          <center>
            <Button
              shadow
              color="error"
              icon={<SiFirebase fill="#fff" />}
              style={{ width: "fit-content" }}
            >
              <span>
                Abrir <strong> Firebase</strong>
              </span>
            </Button>
          </center>
        </div>
      </Card>
    </div>
  );
};

export default NoConnection;
