import { useContext, useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

import Header from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";
import { UserContext } from "./Containers/useContext/Context";
import { AppRoutes } from "./Components/AppRoutes";
import {USERSERVICE } from "./Containers/Env/Env";
import { useLocation } from "react-router-dom";
import useFetch from "./Containers/CustomHooks/UseFetch";
import { Bounce, toast } from "react-toastify";


function App() {
  const { user,allJobsofCompany } = useContext<any>(UserContext);
  const { fetchresponse,responseError}= useFetch(USERSERVICE+"test","GET");
  const location = useLocation();
console.log(window.location.pathname)
console.log("lock",location)
console.log("response",fetchresponse,responseError);

// const notify = () => {
//   toast.success('Wow so easy!', {
//     position: "top-center",
//     autoClose: 5000,
//     hideProgressBar: false,
//     closeOnClick: true,
//     pauseOnHover: true,
//     draggable: true,
//     progress: undefined,
//     theme: "colored",
//     transition: Bounce,
//     });
// };
  return (
    <div>
      {/* <button onClick={notify}>Notify!</button> */}
     {location.pathname !== "/register" && <Header />} 
      
      <div className={location.pathname === "/register" ? "":"pd-90"}>
     
        <AppRoutes /> 
    </div>
      <Footer />
    </div>
  );
}

export default App;
