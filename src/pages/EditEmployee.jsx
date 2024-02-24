import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function EditEmployee({ employees, setEmployees }) {
  // Hook to navigate between pages
  const navigate = useNavigate();
  // Get the userid parameter from the URL
  const { userid } = useParams();
  // Find the employee object to edit
  const emp = employees.find((employee) => employee.id === userid);
  // State to manage form data
  const [employeeData, setEmployeeData] = useState({
    id: emp.id,
    fullName: emp.fullName,
    birthdate: emp.birthdate,
    department: emp.department,
    experience: emp.experience,
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

    // Find the index of the employee to update
    const employeeIndex = employees.findIndex(
      (employee) => employee.id === emp.id
    );
    if (employeeIndex !== -1) {
      // Create a copy of the employees array
      const updatedEmployees = [...employees];

      // Update the employee object with new data
      updatedEmployees[employeeIndex] = {
        ...updatedEmployees[employeeIndex],
        ...employeeData,
      };

      // Set the state with the updated array
      setEmployees(updatedEmployees);
      // Reset the form fields
      setEmployeeData({
        id: uuidv4(),
        fullName: "",
        birthdate: "",
        department: "",
        experience: "",
      });
    } else {
      console.log("Employee not found");
    }
    // Display success message
    alert("Employee updated successfully");
    // Navigate back to home page
    navigate("/");
  };

  return (
    <div className="max-w-md mx-auto">
      {/* Form for editing employee details */}
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
  );
}

export default EditEmployee;
