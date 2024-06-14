import { useEffect } from "react";
import "./App.css";
import axios from "axios";
import { AppRoutes } from "./Components/AppRoutes";

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
      <AppRoutes />
    </div>
  );
}

export default App;
