import React, { FC, useState } from "react";
import Box from "@mui/material/Box";
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
  const [filters, setFilters] = useState(initialFilter);

  const workers: IWorker[] = JSON.parse(
    window.localStorage.getItem("workers") || "[]"
  );

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
    <div className="search-nav">
      <h1>Search by:</h1>
      <Box
        component="form"
        sx={{
          m: 1,
          width: "280px",
          display: "flex",
          flexDirection: "column",
        }}
        autoComplete="off"
      >
        <TextField
          name="person"
          id="outlined-basic"
          label="Name or Surname"
          value={filters.person}
          variant="outlined"
          onChange={handleChange}
        />
        <FormControl sx={{ mt: 2 }}>
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
        <InputLabel sx={{ mt: 3, mb: 2 }} id="outlined-number">
          Salary range:
        </InputLabel>
        <Box sx={{ display: "flex", mb: 2 }}>
          <TextField
            id="outlined-number"
            label="From"
            value={filters.from}
            name="from"
            type="number"
            onChange={handleChange}
            sx={{ mr: 3 }}
          />
          <TextField
            id="outlined-number"
            label="To"
            value={filters.to}
            name="to"
            type="number"
            onChange={handleChange}
          />
        </Box>
        <FormControl>
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
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            my: 2,
          }}
        >
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
        </Box>
      </Box>
    </div>
  );
};

export default SearchNav;
