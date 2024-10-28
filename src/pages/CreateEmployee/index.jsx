import Header from "../../components/Header";
import Modal from "../../components/Modal";
import { Link } from "react-router-dom";
import { useState } from "react";
import DatePicker from "react-datepicker";
import Select from "react-select";
import states from "../../data/states.json";
import departments from "../../data/department.json";
import "react-datepicker/dist/react-datepicker.css";
import Employee from "../../models/Employee";
import { useDispatch } from "react-redux";
import { createNewEmployee } from "../../store/Slices/employeeSlice";

export default function CreateEmployee() {
  const dispatch = useDispatch()
  const [startDate, setStartDate] = useState();
  const [birthDate, setBirthDate] = useState();
  const [modalIsopen, setModalIsopen] = useState(false);

  const closeModal = () => {
    setModalIsopen(false);
  };
  const openModal = () => {
    setModalIsopen(true);
  };

  const submitForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    // Convertit les données en un objet JSON
    const formValues = Object.fromEntries(data.entries());
    const newEmployee = new Employee(
      formValues["first-name"],
      formValues["last-name"],
      formValues["date-of-birth"],
      formValues["start-date"],
      formValues["street"],
      formValues["city"],
      formValues["state"],
      formValues["zip-code"],
      formValues["department"]
    );
    dispatch(createNewEmployee(newEmployee.toSerializableObject()))
    openModal();
  };
  return (
    <main>
      <Header title={"HRnet"} />
      <div className="container">
        <Link to="/employee-list">View Current Employees</Link>
        <h2>Create Employee</h2>
        <form onSubmit={submitForm} id="create-employee">
          <div className="name-date-fieldset-container">
            <div className="name-date-form">
              <label htmlFor="first-name">First Name</label>
              <input type="text" name="first-name" />

              <label htmlFor="last-name">Last Name</label>
              <input type="text" name="last-name" />
              <label htmlFor="date-of-birth">Date of Birth</label>
              <DatePicker
                name="date-of-birth"
                id="date-of-birth"
                showIcon
                placeholderText="Date of birth"
                showMonthDropdown
                showYearDropdown
                scrollableYearDropdown
                yearDropdownItemNumber={100}
                selected={birthDate}
                onChange={(date) => setBirthDate(date)}
              />

              <label htmlFor="start-date">Start Date</label>
              <DatePicker
                name="start-date"
                id="start-date"
                showIcon
                showMonthDropdown
                showYearDropdown
                scrollableYearDropdown
                yearDropdownItemNumber={15}
                placeholderText="Starting date"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
            <fieldset className="address">
              <legend>Address</legend>
              <label htmlFor="street">Street</label>
              <input name="street" type="text" />
              <label htmlFor="city">City</label>
              <input name="city" type="text" />
              <label htmlFor="state">State</label>
              <Select
                name="state"
                isClearable={true}
                isSearchable={true}
                options={states.states}
              />
              <label htmlFor="zip-code">Zip Code</label>
              <input name="zip-code" type="number" />
            </fieldset>
          </div>

          <label htmlFor="department">Department</label>
          <Select
            name="department"
            isClearable={true}
            isSearchable={true}
            options={departments.departments}
          />
          <button type="submit">Save</button>
        </form>
      </div>
      <Modal
        text={"Employee successfully created!"}
        isOpen={modalIsopen}
        closeModal={closeModal}
      />
    </main>
  );
}
