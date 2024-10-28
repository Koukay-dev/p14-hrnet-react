import { createSlice } from "@reduxjs/toolkit";
import fakeEmployees from '../../../data/fakeEmployees.json'

export const employeeSlice = createSlice({
  name: "employee",
  initialState: { employees: fakeEmployees },
  reducers: {
    createNewEmployee: (currentState, action) => {
        console.log(action.payload)
       currentState.employees.push(action.payload)
    },
    deleteEmployee: (currentState, action) => {
      return {
        ...currentState,
        employees: currentState.employees.filter(
          (employee) => employee.id !== action.payload
        ),
      };
    },
  },
});

export const { createNewEmployee, deleteEmployee } = employeeSlice.actions;
