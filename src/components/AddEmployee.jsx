import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function AddEmployee({ employees, setEmployees }) {
  const [employeeData, setEmployeeData] = useState({
    id: uuidv4(),
    fullName: "",
    birthdate: "",
    department: "",
    experience: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData({
      ...employeeData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setEmployees([...employees, employeeData]);
    // Reset the form fields
    setEmployeeData({
      id: uuidv4(),
      fullName: "",
      birthdate: "",
      department: "",
      experience: "",
    });

    console.log(employees);
  };
  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div>
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-gray-700"
          >
            Full Name
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            pattern="[A-Za-z ]+"
            value={employeeData.fullName}
            onChange={handleInputChange}
            required
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div>
          <label
            htmlFor="birthdate"
            className="block text-sm font-medium text-gray-700"
          >
            Birthdate
          </label>
          <input
            id="birthdate"
            name="birthdate"
            type="date"
            value={employeeData.birthdate}
            onChange={handleInputChange}
            required
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div>
          <label
            htmlFor="department"
            className="block text-sm font-medium text-gray-700"
          >
            Department
          </label>
          <input
            id="department"
            name="department"
            type="text"
            value={employeeData.department}
            onChange={handleInputChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div>
          <label
            htmlFor="experience"
            className="block text-sm font-medium text-gray-700"
          >
            Experience (Years)
          </label>
          <input
            id="experience"
            name="experience"
            type="number"
            value={employeeData.experience}
            onChange={handleInputChange}
            required
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddEmployee;
