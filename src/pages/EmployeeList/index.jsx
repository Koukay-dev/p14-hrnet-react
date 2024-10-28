import Header from "../../components/Header";
import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import { useSelector } from "react-redux";
import { getAllEmployees } from "../../store/Selectors";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function EmployeeList() {
  const employees = useSelector((store) => getAllEmployees(store));

  const [employeesRowData, setEmployeesRowData] = useState(employees);
  const [columnDefs, setColumnDefs] = useState([
    { field: "firstname" },
    { field: "name" },
    { field: "startdate" },
    { field: "department" },
    { field: "birthdate" },
    { field: "street" },
    { field: "city" },
    { field: "state" },
    { field: "ZIP" },
  ]);

  return (
    <main>
      <Header title="Current Employees" />
      <div className="ag-theme-quartz" style={{ height: 500 }}>
        <AgGridReact rowData={employeesRowData} columnDefs={columnDefs}/>
      </div>
      <Link to='/'>Home</Link>
    </main>
  );
}
