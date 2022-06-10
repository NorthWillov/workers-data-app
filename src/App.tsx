import React, { FC, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import AddWorkerBtn from "./components/AddWorkerBtn";
import SearchNav from "./components/SearchNav";
import SummaryPerDepartment from "./components/SummaryPerDepartment";
import WorkersTable from "./components/WorkersTable";
import { initialWorkers, IWorker } from "./constants";
import "./styles/App.css";

const App: FC = () => {
  const [workers, setWorkers] = useState<IWorker[]>([]);
  console.log(workers);

  useEffect(() => {
    if (!window.localStorage.getItem("workers")) {
      window.localStorage.setItem("workers", JSON.stringify(initialWorkers));
    }

    setWorkers(JSON.parse(window.localStorage.getItem("workers") || "[]"));
  }, []);

  const handleNewWorkerSubmit = (newWorker: IWorker) => {
    // add id to new worker
    const worker = { id: workers.length + 1, ...newWorker };

    setWorkers([...workers, worker]);
    window.localStorage.setItem(
      "workers",
      JSON.stringify([...workers, worker])
    );
  };

  const applyFilters = (filteredWorkers: IWorker[]) => {
    setWorkers(filteredWorkers);
  };

  return (
    <div className="App">
      <div className="main">
        <WorkersTable workers={workers} />
        <div className="sidebar">
          <SearchNav setWorkers={setWorkers} applyFilters={applyFilters} />
          <Divider variant="middle" />
          <Box sx={{ width: "280px", m: "auto" }}>
            <h1>Additions:</h1>
            <AddWorkerBtn
              handleNewWorkerSubmit={handleNewWorkerSubmit}
              workers={workers}
            />
            <Divider variant="middle" />
            <SummaryPerDepartment workers={workers} />
          </Box>
        </div>
      </div>
    </div>
  );
};

export default App;
