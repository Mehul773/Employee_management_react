import React, { useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function AddEmployee({ employees, setEmployees }) {
  // State to manage form data
  const [employeeData, setEmployeeData] = useState({
    id: uuidv4(),
    fullName: "",
    birthdate: "",
    department: "",
    experience: "",
  });

  // Function to handle input changes in the form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData({
      ...employeeData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Add new employee to the employees array
    setEmployees([...employees, employeeData]);
    // Reset the form fields
    setEmployeeData({
      id: uuidv4(),
      fullName: "",
      birthdate: "",
      department: "",
      experience: "",
    });

    // Display success message
    alert("Employee added successfully");
  };

  return (
    <>
      {/* Link to navigate back to home page */}
      <div className="flex justify-center mt-2">
        <Link to="/">
          <div className="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
            Home
          </div>
        </Link>
      </div>
      {/* Form for adding new employee */}
      <div className="max-w-md mx-auto">
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {/* Full Name input field */}
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
          {/* Birthdate input field */}
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
          {/* Department input field */}
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
          {/* Experience input field */}
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
          {/* Submit button */}
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
    </>
  );
}

export default AddEmployee;
