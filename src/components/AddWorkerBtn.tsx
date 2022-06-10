import React, { FC, useState } from "react";
import Box from "@mui/material/Box";
import NewWorkerModal from "./NewWorkerModal";
import Button from "@mui/material/Button";
import { IWorker } from "../constants";

interface AddWorkerBtnProps {
  setWorkers(workers: IWorker[]): void;
  handleNewWorkerSubmit({}): void;
}

const AddWorkerBtn: FC<AddWorkerBtnProps> = ({
  setWorkers,
  handleNewWorkerSubmit,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setWorkers(JSON.parse(window.localStorage.getItem("workers") || "[]"));
    setIsOpen(true);
  };
  const handleClose = () => setIsOpen(false);

  return (
    <Box sx={{ mb: 4 }}>
      <Button
        onClick={handleOpen}
        color="success"
        variant="contained"
        size="large"
      >
        Click to Add New Worker!
      </Button>
      <NewWorkerModal
        handleNewWorkerSubmit={handleNewWorkerSubmit}
        isOpen={isOpen}
        handleClose={handleClose}
      />
    </Box>
  );
};

export default AddWorkerBtn;
