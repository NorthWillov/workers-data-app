import React, { FC } from "react";
import { IWorker } from "../constants";

interface WorkersTableProps {
  workers: IWorker[];
}

const WorkersTable: FC<WorkersTableProps> = ({ workers }) => {
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
