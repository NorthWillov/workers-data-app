import React, { FC, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import NewWorkerForm from "./NewWorkerForm";

interface NewWorkerModalProps {
  isOpen: boolean;
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
  handleClose,
  handleNewWorkerSubmit,
}) => {
  const [newWorker, setNewWorker] = useState(initialNewWorker);
  const [isValidated, setIsValidated] = useState(false);

  const handleSubmit = () => {
    setIsValidated(true);

    // if valid proceed further
    if (Object.values(newWorker).every((el) => el)) {
      handleNewWorkerSubmit(newWorker);
      handleClose();
      setNewWorker(initialNewWorker);
      setIsValidated(false);
    }
  };

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>Add New Worker!</DialogTitle>
      <DialogContent sx={{ padding: "10px" }}>
        <NewWorkerForm
          isValidated={isValidated}
          setNewWorker={setNewWorker}
          newWorker={newWorker}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Add</Button>
      </DialogActions>
    </Dialog>
  );
};

export default NewWorkerModal;
