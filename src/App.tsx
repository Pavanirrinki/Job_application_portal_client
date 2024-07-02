import { useContext, useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { AppRoutes } from "./Components/AppRoutes";
import Header from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";
import { UserContext } from "./Containers/useContext/Context";

function App() {
  const { user } = useContext(UserContext);

  console.log(user);
  return (
    <div>
      <Header />
      <div className="pd-90">
        <AppRoutes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
