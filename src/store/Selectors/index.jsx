
export const getAllEmployees = (store) => store?.employee?.employees
export const getEmployeeFromId = (store, id) => store?.employee?.map((employee) => employee.id === id)