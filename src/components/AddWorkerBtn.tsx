import React, { FC, useState } from "react";
import Box from "@mui/material/Box";
import NewWorkerModal from "./NewWorkerModal";
import Button from "@mui/material/Button";
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
        workers={workers}
      />
    </Box>
  );
};

export default AddWorkerBtn;
