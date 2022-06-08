import React, { FC } from "react";
import { IWorker } from "../constants";

interface IWorkersTable {
  workers: IWorker[];
}

const WorkersTable: FC<IWorkersTable> = ({ workers }) => {
  return (
    <div>
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
    </div>
  );
};

export default WorkersTable;
