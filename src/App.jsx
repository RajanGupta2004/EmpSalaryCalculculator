import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import SalaryCalculator from "./components/SalaryCalculator";
import SalaryCalculatorone from "./components/SalaryCalculatorone";
import Sidebar from "./components/Sidebar";
import FormDataTable from "./components/FormDataTable";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex contentwraper">
        <Sidebar />
        <SalaryCalculatorone />
        {/* <FormDataTable /> */}

        {/* <SalaryCalculator /> */}
      </div>
    </>
  );
}

export default App;
