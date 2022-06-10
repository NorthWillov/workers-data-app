import React, { FC } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableFooter from "@mui/material/TableFooter";
import Paper from "@mui/material/Paper";
import { IWorker } from "../constants";

interface WorkersTableProps {
  workers: IWorker[];
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
}));

const WorkersTable: FC<WorkersTableProps> = ({ workers }) => {
  return (
    <TableContainer component={Paper} sx={{ mt: 5, mr: 2 }}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Id</StyledTableCell>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Last Name</StyledTableCell>
            <StyledTableCell>Department</StyledTableCell>
            <StyledTableCell>Salary</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {workers.map((worker) => (
            <StyledTableRow key={worker.id}>
              <StyledTableCell component="th" scope="row">
                {worker.id}
              </StyledTableCell>
              <StyledTableCell>{worker.name}</StyledTableCell>
              <StyledTableCell>{worker.surname}</StyledTableCell>
              <StyledTableCell>{worker.department}</StyledTableCell>
              <StyledTableCell>
                {worker.salary} {worker.salaryCurrency}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell align="right" colSpan={3}></TableCell>
            <StyledTableCell>Summary:</StyledTableCell>
            <StyledTableCell>
              {workers.reduce((acc, el) => {
                if (el.salaryCurrency === "PLN") {
                  return acc + Math.round(Number(el.salary / 4.34));
                }
                if (el.salaryCurrency === "EUR") {
                  return acc + Math.round(Number(el.salary / 0.94));
                }
                return acc + Number(el.salary);
              }, 0)}{" "}
              USD
            </StyledTableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};

export default WorkersTable;
