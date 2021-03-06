import React, { FC, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { IWorker } from "../constants";

interface SummaryPerDepartmentProps {
  workers: IWorker[];
}

const SummaryPerDepartment: FC<SummaryPerDepartmentProps> = ({ workers }) => {
  const [department, setDepartment] = useState("");

  const handleChange = (e: SelectChangeEvent) => {
    setDepartment(e.target.value as string);
  };

  return (
    <div>
      <InputLabel sx={{ mt: 2, mb: 1 }} id="department-select">
        Calculate summary per department:
      </InputLabel>
      <FormControl fullWidth>
        <InputLabel id="department-select">Choose department</InputLabel>
        <Select
          name="department"
          required
          labelId="department-select"
          id="department-select"
          value={department}
          label="Choose department"
          onChange={handleChange}
        >
          <MenuItem value="IT">IT</MenuItem>
          <MenuItem value="Sales">Sales</MenuItem>
          <MenuItem value="Administration">Administration</MenuItem>
        </Select>
      </FormControl>
      <h4>
        {/* Convert all currencies to USD, it's always better to use currencies API for that */}
        Summary:{" "}
        {workers
          .filter((worker) => worker.department === department)
          .reduce((acc, el) => {
            if (el.salaryCurrency === "PLN") {
              return acc + Math.round(Number(el.salary / 4.34));
            }
            if (el.salaryCurrency === "EUR") {
              return acc + Math.round(Number(el.salary / 0.94));
            }
            return acc + Number(el.salary);
          }, 0)}{" "}
        USD
      </h4>
    </div>
  );
};

export default SummaryPerDepartment;
