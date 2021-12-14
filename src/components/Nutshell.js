// import React, { Component } from "react";
// import NavBar from "./nav/NavBar";
// import ApplicationViews from "./ApplicationViews";
// import "./Nutshell.css";

// class Nutshell extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <NavBar />
//         <ApplicationViews />
//       </React.Fragment>
//     );
//   }
// }

// export default Nutshell;


import React, { useState } from "react";
import { NavBar } from "./nav/NavBar";
import { ApplicationViews } from "./ApplicationViews";
import "./Nutshell.css";
import { Routes, Route, Navigate } from "react-router";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register"

export const Nutshell = () => {
  // eslint-disable-next-line
  const [loggedin, setLoggedin] = useState(false);

  const changeState = (bool) => setLoggedin(bool);

  if (localStorage.getItem("activeUser")) {
    return (
      <>
        <NavBar />
        <ApplicationViews />
      </>
    );
  } else {
    return (
      <Routes>
        <Route path="/" element={<Navigate to="login" />} />
        <Route path="/login" element={<Login setLoggedin={changeState} />} />
        <Route path="/register" element={<Register setLoggedin={changeState} />} />
      </Routes>
    );
  }
};
