import React, { FC } from "react";
import { IWorker } from "../constants";

interface WorkersTableProps {
  workers: IWorker[];
}

const WorkersTable: FC<WorkersTableProps> = ({ workers }) => {
  return (
    <div>
      <h1>Workers Data Base</h1>
      {workers.length === 0 && <h2>Workers weren't found!</h2>}
      {workers.map((worker) => (
        <div key={worker.id} style={{ display: "flex" }}>
          <p>{worker.id}</p>
          <p>{worker.name}</p>
          <p>{worker.surname}</p>
          <p>{worker.department}</p>
          <p>
            {worker.salary}, {worker.salaryCurrency}
          </p>
        </div>
      ))}
      <p>
        USD Summary:{" "}
        {Math.round(
          workers
            .filter((worker) => worker.salaryCurrency === "USD")
            .reduce((acc, el) => acc + Number(el.salary), 0)
        )}
      </p>
      <p>
        PLN Summary:{" "}
        {Math.round(
          workers
            .filter((worker) => worker.salaryCurrency === "PLN")
            .reduce((acc, el) => acc + Number(el.salary), 0)
        )}
      </p>
      <p>
        EUR Summary:{" "}
        {Math.round(
          workers
            .filter((worker) => worker.salaryCurrency === "EUR")
            .reduce((acc, el) => acc + Number(el.salary), 0)
        )}
      </p>
    </div>
  );
};

export default WorkersTable;
