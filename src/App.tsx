import React, { FC, useEffect, useState } from "react";
import AddWorkerBtn from "./components/AddWorkerBtn";
import WorkersTable from "./components/WorkersTable";
import { initialWorkers, IWorker } from "./constants";
import "./styles/App.css";

const App: FC = () => {
  const [workers, setWorkers] = useState<IWorker[] | []>(
    JSON.parse(window.localStorage.getItem("workers") || "[]")
  );

  useEffect(() => {
    getWorkers();
    console.log("useEffect: ", workers);
  }, [workers]);

  const getWorkers = () => {
    if (workers.length === 0) {
      window.localStorage.setItem("workers", JSON.stringify(initialWorkers));
    }
  };

  return (
    <div className="App">
      <WorkersTable workers={workers} />
      <AddWorkerBtn />
    </div>
  );
};

export default App;
