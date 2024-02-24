import React from "react";
import { Link } from "react-router-dom";

function Home({ employees, setEmployees }) {
  function handleDelete(id) {
    const ans = confirm("Do you want to proceed?");
    if (ans) {
      const temp = employees.filter((emp) => emp.id != id);
      setEmployees(temp);
    }
  }
  return (
    <>
      <div className="flex justify-center mt-2">
        <Link to="add">
          <div className="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
            + Add Employee
          </div>
        </Link>
      </div>
      <div>
        <h1 className="text-2xl font-bold mb-4">Employee List</h1>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                #
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Full Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Birthdate
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Department
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Experience (Years)
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {employees.map((employee, index) => (
              <tr key={employee.id}>
                <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {employee.fullName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {employee.birthdate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {employee.department}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {employee.experience}
                </td>
                <td className="px-6 py-4 whitespace-nowrap flex">
                  <Link to={`/edit/${employee.id}`}>
                    <div className="text-blue-600 hover:text-blue-900 mr-2">
                      Edit
                    </div>
                  </Link>
                  <button
                    className="text-red-600 hover:text-red-900"
                    onClick={() => handleDelete(employee.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Home;
