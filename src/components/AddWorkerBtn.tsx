import React, { FC, useState } from "react";
import NewWorkerModal from "./NewWorkerModal";
import { IWorker } from "../constants";

interface AddWorkerBtnProps {
  workers: IWorker[];
  handleNewWorkerSubmit({}): void;
}

const AddWorkerBtn: FC<AddWorkerBtnProps> = ({
  workers,
  handleNewWorkerSubmit,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div>
      <button onClick={handleOpen}>Add New Worker!</button>
      <NewWorkerModal
        handleNewWorkerSubmit={handleNewWorkerSubmit}
        isOpen={isOpen}
        handleClose={handleClose}
        workers={workers}
      />
    </div>
  );
};

export default AddWorkerBtn;
