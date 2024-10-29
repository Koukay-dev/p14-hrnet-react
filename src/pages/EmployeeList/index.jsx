import Header from "../../components/Header";
import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import { useSelector } from "react-redux";
import { getAllEmployees } from "../../store/Selectors";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

export default function EmployeeList() {
  const employees = useSelector((store) => getAllEmployees(store));

  const [employeesRowData] = useState(employees);
  const [columnDefs] = useState([
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

  const defaultColsDef = useMemo(() => {
    return {
      flex: 1,
      filter: true,
      floatingFilter: true,
    };
  }, []);

  return (
    <main>
      <Header title="Current Employees" />
      <div
        className="ag-theme-quartz"
        style={{ height: 580, width: "96%", margin: "auto" }}
      >
        <AgGridReact
          rowData={employeesRowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColsDef}
          pagination={true}
          paginationPageSize={10}
          paginationPageSizeSelector={[10,20]}
        />
      </div>
      <Link className="navLink" to="/">Home</Link>
    </main>
  );
}
