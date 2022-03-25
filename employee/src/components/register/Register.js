import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dispatchUserRegisterDetails } from "../../redux/action/register.action";
import { useNavigate } from "react-router-dom";
import "./Register.css";

function Register() {
  const despatch = useDispatch();
  let navigate = useNavigate();

  const [initialState] = useState({
    name: "",
    empid: "",
    password: "",
  });

  const [formData, setFormData] = useState(initialState);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("formData: ", formData);
    despatch(dispatchUserRegisterDetails(formData));
    setFormData(initialState);
    navigate("/login");
  };

  return (
    <div className="register">
      <form className="register_form" onSubmit={handleFormSubmit}>
        <h1>Register Here...</h1>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={(e) => onChangeHandler(e)}
          placeholder="Enter Name"
          required
        />
        <input
          type="text"
          name="empid"
          value={formData.empid}
          onChange={(e) => onChangeHandler(e)}
          placeholder="Enter Employee ID"
          required
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={(e) => onChangeHandler(e)}
          placeholder="Enter Password"
          required
        />
        <button type="submit" className="submit_btn">Submit</button>
      </form>
    </div>
  );
}

export default Register;
