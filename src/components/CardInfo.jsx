import React from "react";

import { Text, Card } from "@nextui-org/react";

// eslint-disable-next-line react/prop-types
const CardInfo = ({ number, title, message, icon, colorName }) => {
  return (
    <Card color={colorName} style={{ margin: "10px", maxWidth: "300px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          minWidth: "180px",
        }}
      >
        <div>
          <Text h4 transform="capitalize" style={{ color: "#fff" }}>
            {`${number ? number : ""} ${title}`}
          </Text>
          <Text style={{ color: "#fff", fontSize: "13px", marginTop: "5px" }}>
            {message}
          </Text>
        </div>
        <div style={{ marginLeft: "10px", alignSelf: "center" }}>{icon}</div>
      </div>
    </Card>
  );
};

export default CardInfo;
