import React, { useState } from "react";
import ShowData from "./ShowData";

const SalaryCalculator = () => {
  const [companyName, setCompanyName] = useState("");
  const [designation, setDesignation] = useState("developer");
  const [annualCTC, setAnnualCTC] = useState("");
  const [experience, setExperience] = useState("fresher");
  let [tax, setTax] = useState("");
  const [calculatedSalary, setCalculatedSalary] = useState("");

  const handlecalculatedSalary = (e) => {
    e.preventDefault();
    let salaryMultiplier = 0;

    if (designation === "developer") {
      salaryMultiplier = 0.8;
    } else if (designation === "designer") {
      salaryMultiplier = 0.75;
    } else if (designation === "managar") {
      salaryMultiplier = 0.9;
    }
    const totalsalary = annualCTC * salaryMultiplier;
    const tax = annualCTC - totalsalary;
    setCalculatedSalary(totalsalary);
    setTax(tax);
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
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
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
              // value={designation}
              onChange={(e) => setDesignation(e.target.value)}
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
              value={annualCTC}
              onChange={(e) => setAnnualCTC(e.target.value)}
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
              onChange={(e) => setExperience(e.target.value)}
              // value={experience}
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

          <button className="mx-3  btn btn-primary">DownLoad Recipt</button>
        </fieldset>
        <br />
        <br />
        <hr />
      </form>
      <div>
        {calculatedSalary !== null && (
          <ShowData
            companyName={companyName}
            designation={designation}
            annualCTC={annualCTC}
            experience={experience}
            tax={tax}
            calculatedSalary={calculatedSalary}
          />
        )}
      </div>
    </div>
  );
};

export default SalaryCalculator;
