import { useContext, useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { AppRoutes } from "./Components/AppRoutes";
import Header from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";
import { UserContext } from "./Containers/useContext/Context";

function App() {
  const [data,setData] = useState<any>();
  const{user} = useContext(UserContext);
  useEffect(() => {
    axios
      .get(
        "http://localhost:8765/da123", {
          
        headers: {
          Accept: 'application/json',
          "Content-Type":"application/json"
          
        },
    }
      )
      .then((data) => setData(data.data))
      .catch((e) => console.log(e.message));
  }, []);
  console.log(user)
  return (
    <div>
            <Header />
     <div style={{paddingTop:"90px"}}>    
      <AppRoutes />
      </div> 
      <Footer />
    </div>
  );
}

export default App;


// className="otp-field"
//  className="btn bg-primary"