import React, { FC, useState } from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Button from "@mui/material/Button";
import { IWorker } from "../constants";

enum initialFilter {
  person = "",
  department = "",
  from = 0,
  to = 0,
  salaryCurrency = "",
}

interface SearchNavProps {
  applyFilters(filteredWorkers: IWorker[]): void;
  setWorkers(workers: IWorker[]): void;
}

const SearchNav: FC<SearchNavProps> = ({ applyFilters, setWorkers }) => {
  const workers: IWorker[] =
    JSON.parse(window.localStorage.getItem("workers") || "") || [];
  const [filters, setFilters] = useState(initialFilter);

  const handleChange = (e: SelectChangeEvent | any) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleApply = () => {
    let fromToRange;
    let results = [];

    if (filters.person) {
      const nameResults = workers.filter(
        (worker) =>
          worker.name.toLowerCase().includes(filters.person.toLowerCase()) ||
          worker.surname.toLowerCase().includes(filters.person.toLowerCase())
      );
      results.push(nameResults);
    }

    if (filters.department) {
      const departmentResults = workers.filter(
        (worker) => worker.department === filters.department
      );
      results.push(departmentResults);
    }

    if (!filters.to && filters.from) {
      fromToRange = workers.filter(
        (worker) => Number(worker.salary) >= filters.from
      );
      results.push(fromToRange);
    }

    if (filters.to) {
      fromToRange = workers.filter(
        (worker) =>
          Number(worker.salary) >= filters.from &&
          Number(worker.salary) <= filters.to
      );
      results.push(fromToRange);
    }

    if (filters.salaryCurrency) {
      const currencyResults = workers.filter(
        (worker) => worker.salaryCurrency === filters.salaryCurrency
      );
      results.push(currencyResults);
    }

    if (results.length !== 0) {
      results = results.reduce(
        (acc, el) =>
          acc.filter((worker) =>
            el.map((filteredWorker) => filteredWorker.id).includes(worker.id)
          ),
        workers
      );
      applyFilters(results);
    }
  };

  const handleClear = () => {
    setFilters(initialFilter);
    setWorkers(JSON.parse(window.localStorage.getItem("workers") || ""));
  };

  return (
    <div>
      <h1>Search by:</h1>
      <TextField
        name="person"
        id="outlined-basic"
        label="Name or Surname"
        value={filters.person}
        variant="outlined"
        onChange={handleChange}
      />
      <FormControl sx={{ width: "150px" }}>
        <InputLabel id="department-select">Department</InputLabel>
        <Select
          name="department"
          required
          labelId="department-select"
          value={filters.department}
          id="department-select"
          label="Department"
          onChange={handleChange}
        >
          <MenuItem value="IT">IT</MenuItem>
          <MenuItem value="Sales">Sales</MenuItem>
          <MenuItem value="Administration">Administration</MenuItem>
        </Select>
      </FormControl>
      <TextField
        sx={{ width: "100px" }}
        id="outlined-number"
        label="From"
        value={filters.from}
        name="from"
        type="number"
        onChange={handleChange}
      />
      <TextField
        sx={{ width: "100px" }}
        id="outlined-number"
        label="To"
        value={filters.to}
        name="to"
        type="number"
        onChange={handleChange}
      />
      <FormControl sx={{ width: "100px" }}>
        <InputLabel id="currency-select">Currency</InputLabel>
        <Select
          name="salaryCurrency"
          required
          labelId="currency-select"
          id="currency-select"
          value={filters.salaryCurrency}
          label="Currency"
          onChange={handleChange}
        >
          <MenuItem value="USD">USD</MenuItem>
          <MenuItem value="PLN">PLN</MenuItem>
          <MenuItem value="EUR">EUR</MenuItem>
        </Select>
      </FormControl>
      <Button
        onClick={handleApply}
        size="large"
        variant="contained"
        color="success"
      >
        Apply
      </Button>
      <Button
        onClick={handleClear}
        size="large"
        variant="contained"
        color="error"
      >
        Clear
      </Button>
    </div>
  );
};

export default SearchNav;
