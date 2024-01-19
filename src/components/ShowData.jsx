import React, { useState } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";

const ShowData = ({ tabledata }) => {
  // console.log(onbuttonClick, 4);
  //  export data
  const doc = new jsPDF();

  const HandlepdfExport = () => {
    doc.autoTable({ html: "#empdata" });
    doc.save("table.pdf");
  };

  return (
    <>
      <button className="btn btn-success" onClick={HandlepdfExport}>
        Download Recipts
      </button>
      <table id="empdata" className="table">
        <thead>
          <tr>
            <th scope="col">S.no</th>
            <th scope="col">Company Name</th>
            <th scope="col">Designation</th>
            <th scope="col">AnnualCTC</th>
            <th scope="col">Experience</th>
            <th scope="col">tax</th>
            <th scope="col">Net Salary</th>
          </tr>
        </thead>
        <tbody>
          {tabledata.map((item, i) => (
            <tr key={i}>
              <th scope="row">{i + 1}</th>
              <td>{item.companyName}</td>
              <td>{item.designation}</td>
              <td>{item.annualCTC}</td>
              <td>{item.experience}</td>
              <td>{item.tax}</td>
              <td>{item.netSalary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ShowData;
