import { createSlice } from "@reduxjs/toolkit";
import fakeEmployees from '../../../data/fakeEmployees.json'

/**
 * Slice qui va gérer les états des variables employées et qui possède 2 action dans son reducer: 
 * - createNewEmployee qui en parametre prends un objet employé et l'ajoute à la liste existante
 * - deleteEmployee qui prend l'id de l'utilisateur à supprimer puis le supprime (action pas encore utilisée)
 */
export const employeeSlice = createSlice({
  name: "employee",
  initialState: { employees: fakeEmployees },
  reducers: {
    createNewEmployee: (currentState, action) => {
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
