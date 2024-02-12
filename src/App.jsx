import { useState } from "react";
import Home from "./Pages/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./Pages/Login";
import AboutUs from "./Pages/AboutUs";
import Register from "./Pages/Register";
import Services from "./Pages/Services";
import Plans from "./Pages/Plans";
import CommingSoon from "./Pages/CommingSoon";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<CommingSoon />}></Route> */}

        <Route path="/" element={<Home />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Register" element={<Register />}></Route>
        <Route path="/AboutUs" element={<AboutUs />}></Route>
        <Route path="/Services" element={<Services />}></Route>
        <Route path="/Plans" element={<Plans />}></Route>
        <Route path="/ThankYou" element={<CommingSoon />}></Route>

        {/* Invalid url */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}
