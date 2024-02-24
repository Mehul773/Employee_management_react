import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddEmployee from "./components/AddEmployee";
import EditEmployee from "./components/EditEmployee";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [employees, setEmployees] = useState([]);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home employees={employees} />} />
        <Route
          path="/edit/:id"
          element={
            <EditEmployee employees={employees} setEmployees={setEmployees} />
          }
        />
        <Route
          path="/add"
          element={
            <AddEmployee employees={employees} setEmployees={setEmployees} />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
