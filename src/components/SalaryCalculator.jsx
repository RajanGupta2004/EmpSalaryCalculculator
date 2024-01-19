import React, { useState } from "react";

const SalaryCalculator = () => {
  const [companyName, setCompanyName] = useState("");
  const [designation, setDesignation] = useState("developer");
  const [annualCTC, setAnnualCTC] = useState(0);
  const [experience, setExperience] = useState("fresher");
  let [calculatedSalary, setCalculatedSalary] = useState(null);

  const calculateSalary = () => {
    let salaryMultiplier = 0;

    if (designation === "developer") {
      salaryMultiplier = 0.8;
    } else if (designation === "designer") {
      salaryMultiplier = 0.75;
    } else if (designation === "manager") {
      salaryMultiplier = 0.9;
    }
    const calculatedSalary = annualCTC * salaryMultiplier;
    setCalculatedSalary(calculatedSalary);
  };

  return (
    <div className="container">
      <div className="wrapper">
        <h2 className="title">Salary Calculator</h2>
        <div className="fields">
          <label>Company Name:</label>
          <input
            onChange={(e) => setCompanyName(e.target.value)}
            value={companyName}
            className="inputdata"
            type="text"
            placeholder="Enter your company name..."
          />
        </div>
        <div className="fields">
          <label> Designation:</label>
          <select
            onChange={(e) => setDesignation(e.target.value)}
            value={designation}
            className="inputdata"
          >
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
            <option value="manager">Managar</option>
          </select>
        </div>
        <div className="fields">
          <label>Annula CTC:</label>
          <input
            onChange={(e) => setAnnualCTC(e.target.value)}
            value={annualCTC}
            className="inputdata"
            type="number"
            placeholder="Enter your Annual CTC.."
          />
        </div>
        <div className="fields">
          <label> Experience:</label>
          <select
            onChange={(e) => setExperience(e.target.value)}
            value={experience}
            className="inputdata"
          >
            <option value="fresher">Fresher</option>
            <option value="1year">1 Year</option>
            <option value="2years">2 Years</option>
          </select>
        </div>
        <button onClick={calculateSalary} className="btn">
          {" "}
          Calculate
        </button>
      </div>
      {calculatedSalary !== null && (
        <div>
          <h3>Result:</h3>
          <p>
            Company: {companyName} <br />
            Designation: {designation} <br />
            Experience: {experience} <br />
            Calculated Salary: {calculatedSalary}
          </p>
        </div>
      )}
    </div>
  );
};

export default SalaryCalculator;
