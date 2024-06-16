import React from "react";
import { Route, Routes } from "react-router-dom";

import Login from "./Login/Login";
import { Register } from "./Register/Register";
import Home from "./Home/Home";
import { Footer } from "./Footer/Footer";
import UpdateProfile from "./UpdateProfile/UpdateProfile";
import Header from "./Header/Header";

type Props = {};

export const AppRoutes = (props: Props) => {
  return (

    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/Register" element={<Register />} />
       <Route path="/profile_info" element={<UpdateProfile />} />
      <Route path="/Login" element={<Login />} />
   
    </Routes>

  );
};
