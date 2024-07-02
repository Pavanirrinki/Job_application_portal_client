import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import { Register } from "./Register/Register";
import Home from "./Home/Home";
import UpdateProfile from "./UpdateProfile/UpdateProfile";
import ForgotPassword from "./ForgotPassword/ForgotPassword";
import ChangePassword from "./ChangePassword/ChangePassword";
import SingleJob from "./SingleJob.tsx/SingleJob";

type Props = {};

export const AppRoutes = (props: Props) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />     
      <Route path="/Register" element={<Register />} />
      <Route path="/profile_info" element={<UpdateProfile />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/forgotPassword" element={<ForgotPassword />} />
      <Route path="/changePassword" element={<ChangePassword />} />
      <Route path="/ParticularJob" element={<SingleJob />} />
    </Routes>
  );
};


// All Style tags are removed to Home Component
// All Style tags are removed to Register Component
// All Style tags are removed to UpdateProfile Component
// All Style tags are removed to Login Component
//All Style tags are removed to Forgotpassword Component