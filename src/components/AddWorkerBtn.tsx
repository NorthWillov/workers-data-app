import React, { FC, useState } from "react";
import NewWorkerModal from "./NewWorkerModal";

const AddWorkerBtn: FC = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div>
      <button onClick={handleOpen}>Add New Worker!</button>
      <NewWorkerModal isOpen={isOpen} handleClose={handleClose} />
    </div>
  );
};

export default AddWorkerBtn;
