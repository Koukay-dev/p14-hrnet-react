import { useState } from "react";
import DatePicker from "react-datepicker";
import Select from "react-select";
import states from "../../data/states.json";
import departments from "../../data/department.json";
import "react-datepicker/dist/react-datepicker.css";

export default function NewEmployeeForm() {
  const [startDate, setStartDate] = useState();
  const [birthDate, setBirthDate] = useState();

  const submitForm = (e) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={submitForm} id="create-employee">
      <div className="name-date-fieldset-container">
        <div className="name-date-form">
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" />

          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" />
          <label htmlFor="date-of-birth">Date of Birth</label>
          <DatePicker
            id="date-of-birth"
            showIcon
            isClearable
            placeholderText="Date of birth"
            selected={birthDate}
            onChange={(date) => setBirthDate(date)}
          />

          <label htmlFor="start-date">Start Date</label>
          <DatePicker
            id="start-date"
            showIcon
            isClearable
            placeholderText="Starting date"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>
        <fieldset className="address">
          <legend>Address</legend>
          <label htmlFor="street">Street</label>
          <input id="street" type="text" />
          <label htmlFor="city">City</label>
          <input id="city" type="text" />
          <label htmlFor="state">State</label>
          <Select
            name="state"
            id="state"
            isClearable={true}
            isSearchable={true}
            options={states.states}
          />
          <label htmlFor="zip-code">Zip Code</label>
          <input id="zip-code" type="number" />
        </fieldset>
      </div>

      <label htmlFor="department">Department</label>
      <Select
        name="department"
        id="department"
        isClearable={true}
        isSearchable={true}
        options={departments.departments}
      />
      <button type="submit">Save</button>
    </form>
  );
}
