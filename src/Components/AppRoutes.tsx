import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import { Register } from "./Register/Register";
import UpdateProfile from "./UpdateProfile/UpdateProfile";
import ForgotPassword from "./ForgotPassword/ForgotPassword";
import ChangePassword from "./ChangePassword/ChangePassword";
import SingleJob from "./SingleJob.tsx/SingleJob";
import { UploadJob } from "./UploadJob/UploadJob";
import Home from "./Home/Home";
import Login from "./Login/Login";
import { UserContext } from "../Containers/useContext/Context";
import CompanyHome from "./CompanyHome/CompanyHome";
import PostReviews from "../Containers/PostReviews/PostReviews";

export const AppRoutes = () => {
  const { user } = useContext<any>(UserContext);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={user && user.registerAs === "Employee" ? <Home /> : <CompanyHome />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile_info" element={<UpdateProfile />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgotPassword" element={<ForgotPassword />} />
      <Route path="/changePassword" element={<ChangePassword />} />
      <Route path="/ParticularJob/:id" element={<SingleJob />} />
      <Route path="/PostJob" element={<UploadJob />} />
      <Route path="/post_Reviews" element ={<PostReviews />} />
    </Routes>
  );
};
