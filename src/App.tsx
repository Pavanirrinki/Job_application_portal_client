import { useContext, useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

import Header from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";
import { UserContext } from "./Containers/useContext/Context";
import { AppRoutes } from "./Components/AppRoutes";
import { USERSERVICE } from "./Containers/Env/Env";
import { useLocation } from "react-router-dom";


function App() {
  const { user,allJobsofCompany } = useContext<any>(UserContext);
  const location = useLocation();
console.log(window.location.pathname)
console.log("lock",location)
  return (
    <div>
     {location.pathname !== "/register" && <Header />} 
      
      <div className={location.pathname === "/register" ? "":"pd-90"}>
     
        <AppRoutes /> 
    </div>
      <Footer />
    </div>
  );
}

export default App;
