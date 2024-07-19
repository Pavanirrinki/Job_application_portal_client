import { useContext, useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

import Header from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";
import { UserContext } from "./Containers/useContext/Context";
import { AppRoutes } from "./Components/AppRoutes";
import { USERSERVICE } from "./Containers/Env/Env";



function App() {
  const { user,allJobsofCompany } = useContext<any>(UserContext);
console.log(window.location.pathname)


  return (
    <div>
     {window.location.pathname !== "/register" && <Header />} 
      
      <div className={window.location.pathname === "/register" ? "":"pd-90"}>
     
        <AppRoutes /> 
    </div>
      <Footer />
    </div>
  );
}

export default App;
