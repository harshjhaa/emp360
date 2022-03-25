import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import "./Dashboard.css";

function Dashboard() {
  const [userData, setUserData] = useState({});

  const loggedInUser = useSelector((state) => state.loginReducer.loggedInUser);

  useEffect(() => {
    axios
      .get("http://localhost:5050/user")
      .then((res) => {
        const result = res.data;
        if (result.length > 0 && loggedInUser) {
          // console.log("loggedInUser Out: ", loggedInUser);
          // console.log("result Out: ", result);
          result.forEach((emp) => {
            if (emp.empid == loggedInUser.empid) {
              // console.log("loggedInUser In: ", loggedInUser);
              // console.log("emp In: ", emp);
              setUserData(emp);
            }
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [loggedInUser]);

  return (
    <div className="userDetails">
      Name: {userData.name}
      EmpId: {userData.empid}
      DOB: {userData["D.O.B"]}
    </div>
  );
}

export default Dashboard;
