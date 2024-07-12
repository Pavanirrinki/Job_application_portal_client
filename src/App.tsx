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
 const [file,setFile] = useState<any>(null);
console.log(user,'k',allJobsofCompany,"alll");

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (!file) {
      console.log("No file selected");
      return;
  }

  const formData = new FormData();
  formData.append("file", file);

  axios.post(USERSERVICE + 'extract', formData, {
      headers: {
          "Content-Type": "multipart/form-data"
      }
  })
  .then((res) => {
      const experienceRegex = /Experience([\s\S]+?)Education/g;
      const match = experienceRegex.exec(res.data);
      if (match) {
          const experienceSection = match[1].trim(); // Extracted experience section
          console.log("Experience Section:", experienceSection);
          // Further processing or state update with experienceSection
      } else {
          console.log("Experience section not found in response");
      }
  })
  .catch((err) => {
      console.error("Failed to upload file:", err);
      // Handle error state or display error message
  });
};

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]); // Update selected file
  }
};

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
