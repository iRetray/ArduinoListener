import React from "react";

import { ref } from "firebase/database";
import { useDatabase, useDatabaseObjectData } from "reactfire";

const ComponentWithRealtime = () => {
  const database = useDatabase();
  const counterRef = ref(database, "counter");

  const { status, data: count } = useDatabaseObjectData(counterRef);

  if (status === "loading") {
    return <span>loading...</span>;
  }

  return <span> {count} </span>;
};

export default ComponentWithRealtime;
