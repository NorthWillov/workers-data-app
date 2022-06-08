import React, { FC } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import NewWorkerForm from "./NewWorkerForm";

interface NewWorkerModalProps {
  isOpen: boolean;
  handleClose(): void;
}

const NewWorkerModal: FC<NewWorkerModalProps> = ({ isOpen, handleClose }) => {
  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>Add New Worker!</DialogTitle>
      <DialogContent sx={{ padding: "10px" }}>
        <NewWorkerForm />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose}>Add</Button>
      </DialogActions>
    </Dialog>
  );
};

export default NewWorkerModal;
