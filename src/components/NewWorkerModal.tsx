import React, { FC, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import NewWorkerForm from "./NewWorkerForm";
import { IWorker } from "../constants";

interface NewWorkerModalProps {
  isOpen: boolean;
  workers: IWorker[];
  handleClose(): void;
  handleNewWorkerSubmit({}): void;
}

enum initialNewWorker {
  name = "",
  surname = "",
  department = "",
  salary = 0,
  salaryCurrency = "",
}

const NewWorkerModal: FC<NewWorkerModalProps> = ({
  isOpen,
  workers,
  handleClose,
  handleNewWorkerSubmit,
}) => {
  const [newWorker, setNewWorker] = useState(initialNewWorker);

  const handleSubmit = () => {
    handleNewWorkerSubmit(newWorker);
    handleClose();
    setNewWorker(initialNewWorker);
  };

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>Add New Worker!</DialogTitle>
      <DialogContent sx={{ padding: "10px" }}>
        <NewWorkerForm setNewWorker={setNewWorker} newWorker={newWorker} />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Add</Button>
      </DialogActions>
    </Dialog>
  );
};

export default NewWorkerModal;
