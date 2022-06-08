export interface IWorker {
  id: number;
  name: string;
  surname: string;
  department: string;
  salary: number;
  salaryCurrency: string;
}

export const initialWorkers: IWorker[] = [
  {
    id: 1,
    name: "John",
    surname: "Smith",
    department: "IT",
    salary: 3000,
    salaryCurrency: "USD",
  },
  {
    id: 2,
    name: "Jane",
    surname: "Doe",
    department: "IT",
    salary: 3000.5,
    salaryCurrency: "USD",
  },
  {
    id: 3,
    name: "Bob",
    surname: "Colman",
    department: "Sales",
    salary: 9000,
    salaryCurrency: "USD",
  },
  {
    id: 4,
    name: "Barbara",
    surname: "O'Connor",
    department: "Sales",
    salary: 4000,
    salaryCurrency: "USD",
  },
  {
    id: 5,
    name: "Adam",
    surname: "Murphy",
    department: "Administration",
    salary: 2000,
    salaryCurrency: "USD",
  },
];