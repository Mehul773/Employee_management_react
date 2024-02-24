import React from "react";
import { useParams } from "react-router-dom";

function EditEmployee({ employees, setEmployees }) {
  const { id } = useParams();
  return <div>EditEmployee {id}</div>;
}

export default EditEmployee;
