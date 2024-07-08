import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";

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


type Props = {};

export const AppRoutes = (props: Props) => {
  const { user } = useContext<any>(UserContext);
  return (
    <>
    <Routes>

        {/* <Route path="/" element={user&&user.registerAs == "Employee" ? <Home />:<CompanyHome />} /> */}
        <Route path='/' element ={<Home  />} />
        <Route path="/register" element={ <Register />} />
        <Route path="/profile_info" element={<UpdateProfile />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/changePassword" element={<ChangePassword />} />
        <Route path="/ParticularJob/:id" element={<SingleJob />} />
        <Route path="/PostJob" element={<UploadJob />} />
        <Route path='HOME/LLL/OOO' element ={<CompanyHome  />} />

      {/* ---------------------------------------------COMPANY ROUTES----------------------------------------------------- */}
     
      </Routes>
      </>
  );
};
