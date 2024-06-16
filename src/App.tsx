import { useEffect } from "react";
import "./App.css";
import axios from "axios";
import { AppRoutes } from "./Components/AppRoutes";
import Header from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";

function App() {
  useEffect(() => {
    axios
      .get(
        "http://desktop-b3n780k:8765/USERSERVICES/users/fetch_all_users"
      )
      .then((data) => console.log(data.data))
      .catch((e) => console.log(e.message));
  }, []);
  return (
    <div>
            <Header />
            <div style={{paddingTop:"80px"}}>
      <AppRoutes/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
