import React, { useState } from "react";
import ShowData from "./ShowData";

const SalaryCalculator = () => {
  const [tabledata, setTabledata] = useState([]);
  const [calculatedSalary, setCalculatedsalary] = useState(null);
  const [formdata, setformdata] = useState({
    companyName: "",
    designation: "developer",
    annualCTC: "",
    experience: "fresher",
  });

  const handleInputdata = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handlecalculatedSalary = (e) => {
    e.preventDefault();

    let salaryMultiplier = 0;

    if (formdata.designation === "developer") {
      salaryMultiplier = 0.8;
    } else if (formdata.designation === "designer") {
      salaryMultiplier = 0.75;
    } else if (formdata.designation === "managar") {
      salaryMultiplier = 0.9;
    }
    const calculatedSalary = formdata.annualCTC * salaryMultiplier;
    const tax = formdata.annualCTC - calculatedSalary;
    setCalculatedsalary(calculatedSalary);
    formdata.tax = tax;
    formdata.netSalary = calculatedSalary;

    setTabledata([...tabledata, formdata]);
    setformdata({
      companyName: "",
      designation: "",
      annualCTC: "",
      experience: "",
    });
  };

  return (
    <div className="mx-30" style={{ width: "70%" }}>
      <form onSubmit={handlecalculatedSalary}>
        <fieldset>
          <legend>Employee Salary Calculator </legend>
          <div className="mb-3">
            <label htmlFor="disabledTextInput" className="form-label">
              Enter company Name:
            </label>
            <input
              type="text"
              value={formdata.companyName}
              name="companyName"
              onChange={handleInputdata}
              required="true"
              id=""
              className="form-control"
              placeholder="Enter Company name...."
            />
          </div>
          <div className="mb-3">
            <label htmlFor="disabledSelect" className="form-label">
              Degination:
            </label>
            <select
              name="designation"
              value={formdata.designation}
              onChange={handleInputdata}
              required="true"
              id="disabledSelect"
              className="form-select"
            >
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="managar">Manager</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Annual CTC:</label>
            <input
              name="annualCTC"
              value={formdata.annualCTC}
              onChange={handleInputdata}
              required="true"
              type="number"
              id=""
              className="form-control"
              placeholder="Enter Your current CTC..."
            />
          </div>
          <div className="mb-3">
            <label htmlFor="disabledSelect" className="form-label">
              Experience:
            </label>
            <select
              name="experience"
              onChange={handleInputdata}
              // value={experience}
              required="true"
              id="disabledSelect"
              className="form-select"
            >
              <option>Fresher</option>
              <option>1 Year Experience</option>
              <option>2 Year Experience</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary">
            Calculate
          </button>
        </fieldset>
        <br />
        <br />
        <hr />
      </form>

      <div>
        {calculatedSalary !== null && <ShowData tabledata={tabledata} />}
      </div>
    </div>
  );
};

export default SalaryCalculator;
