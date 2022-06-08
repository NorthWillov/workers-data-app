import React, { FC } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

interface NewWorkerModalProps {
  isOpen: boolean;
  handleClose(): void;
}

const NewWorkerModal: FC<NewWorkerModalProps> = ({ isOpen, handleClose }) => {
  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>Add New Worker!</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Email Address"
          type="email"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose}>Add</Button>
      </DialogActions>
    </Dialog>
  );
};

export default NewWorkerModal;
