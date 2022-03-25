import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dispatchUserLoginDetails } from "../../redux/action/login.action";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const despatch = useDispatch();
  let navigate = useNavigate();

  const registeredUserData = useSelector(
    (state) => state.registerReducer.registeredUserDetails
  );

  console.log("registeredUserData: ", registeredUserData);

  const [formData, setFormData] = useState({
    empid: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formData.empid !== registeredUserData.empid) {
      alert("Please check employee id");
    } else {
      if (formData.password !== registeredUserData.password) {
        alert("Please check password");
      } else {
        navigate("/dashboard");
      }
    }
    despatch(dispatchUserLoginDetails(formData));
  };

  return (
    <div className="login">
      <h1>Enter login details...</h1>
      <form className="login_form" onSubmit={handleFormSubmit}>
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

export default Login;
