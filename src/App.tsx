import React, { FC, useEffect, useState } from "react";
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

    setWorkers(JSON.parse(window.localStorage.getItem("workers") || ""));
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
      <SearchNav setWorkers={setWorkers} applyFilters={applyFilters} />
      <WorkersTable workers={workers} />
      <AddWorkerBtn
        handleNewWorkerSubmit={handleNewWorkerSubmit}
        workers={workers}
      />
      <SummaryPerDepartment workers={workers} />
    </div>
  );
};

export default App;
