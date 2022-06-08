import React, { FC, useState } from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Button from "@mui/material/Button";

enum initialFilter {
  person = "",
  department = "",
  from = 0,
  to = 0,
  salaryCurrency = "",
}

const SearchNav: FC = () => {
  const [filtered, setFiltered] = useState(initialFilter);

  const handleChange = (e: SelectChangeEvent | any) => {
    setFiltered({ ...filtered, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1>Search by:</h1>
      <TextField
        name="person"
        id="outlined-basic"
        label="Name or Surname"
        variant="outlined"
        onChange={handleChange}
      />
      <FormControl sx={{ width: "150px" }}>
        <InputLabel id="department-select">Department</InputLabel>
        <Select
          name="department"
          required
          labelId="department-select"
          value={filtered.department}
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
        name="from"
        type="number"
        onChange={handleChange}
      />
      <TextField
        sx={{ width: "100px" }}
        id="outlined-number"
        label="To"
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
          value={filtered.salaryCurrency}
          label="Currency"
          onChange={handleChange}
        >
          <MenuItem value="USD">USD</MenuItem>
          <MenuItem value="PLN">PLN</MenuItem>
          <MenuItem value="EUR">EUR</MenuItem>
        </Select>
      </FormControl>
      <Button size="large" variant="contained" color="success">
        Apply
      </Button>
    </div>
  );
};

export default SearchNav;