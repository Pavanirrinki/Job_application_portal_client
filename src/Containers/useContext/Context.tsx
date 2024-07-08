// ThemeContext.js
import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import { USERSERVICE } from '../Env/Env';

// Create a context object
export const UserContext = createContext({user:null,userProfileData:null,educational_details:null});
interface props{
    children:any;
}
// Create a provider component
export const Context: React.FC<props> = ({ children }) => {
const [userProfileData,setUserProfileData] = useState<any>(null);
const [educational_details,setEducational_details] = useState<any>(null);
    const userDataString = localStorage.getItem("Job_application_user_data");
    const userData  = userDataString ? JSON.parse(userDataString) : null;
    console.log(userData,'context',userProfileData)
    useEffect(() => {
      const fetchData = async () => {
        try {
          const userDetailsResponse = await axios.get(
            `${USERSERVICE}get_user_details/${userData.id}`
          );
          setUserProfileData(userDetailsResponse.data);
          
          const userEducationResponse = await axios.get(
            `${USERSERVICE}get_user_educational/${userData.id}`
          );
          setEducational_details(userEducationResponse.data);
        
        } catch (error: any) {
          console.error("Error fetching data:", error.message);
        }
      };
  
      fetchData();
    }, []);

  return (
    <UserContext.Provider value={{user:userData,userProfileData,educational_details}}>
      {children}
    </UserContext.Provider>
  )
};
