import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddEmployee from "./pages/AddEmployee";
import EditEmployee from "./pages/EditEmployee";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [employees, setEmployees] = useState([]);
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home employees={employees} setEmployees={setEmployees} />}
        />
        <Route
          path="/edit/:userid"
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
