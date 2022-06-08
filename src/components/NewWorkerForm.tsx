import React, { FC, useState } from "react";
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
}

const NewWorkerForm: FC<NewWorkerFormProps> = ({ setNewWorker, newWorker }) => {
  const handleChange = (e: SelectChangeEvent | any) => {
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
        onChange={handleChange}
        required
        label="Name"
        name="name"
        variant="standard"
      />
      <TextField
        onChange={handleChange}
        required
        label="Surname"
        name="surname"
        variant="standard"
      />
      <FormControl fullWidth>
        <InputLabel id="department-select">Department</InputLabel>
        <Select
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
        name="salary"
        id="standard-number"
        label="Salary"
        type="number"
        variant="standard"
      />
      <FormControl fullWidth>
        <InputLabel id="currency-select">Currency</InputLabel>
        <Select
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
