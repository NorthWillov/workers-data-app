import React, { FC, ChangeEvent } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { IWorker } from "../constants";

interface NewWorkerFormProps {
  newWorker: IWorker;
  setNewWorker({}): void;
  isValidated: boolean;
}

const NewWorkerForm: FC<NewWorkerFormProps> = ({
  setNewWorker,
  newWorker,
  isValidated,
}) => {
  const handleChange = (
    e: SelectChangeEvent | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNewWorker({ ...newWorker, [e.target.name]: e.target.value });
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      autoComplete="off"
    >
      <TextField
        error={!newWorker.name && isValidated}
        onChange={handleChange}
        required
        label="Name"
        name="name"
        variant="standard"
      />
      <TextField
        error={!newWorker.surname && isValidated}
        onChange={handleChange}
        required
        label="Surname"
        name="surname"
        variant="standard"
      />
      <FormControl fullWidth>
        <InputLabel id="department-select">Department</InputLabel>
        <Select
          error={!newWorker.department && isValidated}
          name="department"
          required
          labelId="department-select"
          id="department-select"
          value={newWorker.department}
          label="Department"
          onChange={handleChange}
        >
          <MenuItem value="IT">IT</MenuItem>
          <MenuItem value="Sales">Sales</MenuItem>
          <MenuItem value="Administration">Administration</MenuItem>
        </Select>
      </FormControl>
      <TextField
        onChange={handleChange}
        error={!newWorker.salary && isValidated}
        name="salary"
        id="standard-number"
        label="Salary"
        type="number"
        variant="standard"
      />
      <FormControl fullWidth>
        <InputLabel id="currency-select">Currency</InputLabel>
        <Select
          error={!newWorker.salaryCurrency && isValidated}
          name="salaryCurrency"
          required
          labelId="currency-select"
          id="currency-select"
          value={newWorker.salaryCurrency}
          label="Department"
          onChange={handleChange}
        >
          <MenuItem value="USD">USD</MenuItem>
          <MenuItem value="PLN">PLN</MenuItem>
          <MenuItem value="EUR">EUR</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default NewWorkerForm;
