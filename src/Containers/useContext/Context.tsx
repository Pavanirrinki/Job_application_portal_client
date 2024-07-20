import axios from "axios";
import React, {
  createContext,
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { COMPANYSERVICE, JOBSSERVICE, USERSERVICE } from "../Env/Env";

// Define context type
interface UserContextType {
  user: any;
  setUser: Dispatch<SetStateAction<any>>;
  userProfileData: any;
  educational_details: any;
  allJobsofCompany:any;
  waitforLoad:boolean;
 
}

// Create a context object
export const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
  userProfileData: null,
  educational_details: null,
  allJobsofCompany:null,
  waitforLoad:false,
 

});

interface Props {
  children: any;
}

// Create a provider component
export const Context: React.FC<Props> = ({ children }) => {
  const [allJobsofCompany,setAllJobsofCompany] = useState<any>(null);
  const [user, setUser] = useState<any>(() => {
    const savedUser = localStorage.getItem("Job_application_user_data");
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [userProfileData, setUserProfileData] = useState<any>(null);
  const [educational_details, setEducational_details] = useState<any>(null);
  const [waitforLoad,setWaitforLoad] = useState<boolean>(false);
  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        try {
          if (user.registerAs === "Employee") {
            const userDetailsResponse = await axios.get(
              `${USERSERVICE}get_user_details/${user.id}`
            );
            setUserProfileData(userDetailsResponse.data);

            const userEducationResponse = await axios.get(
              `${USERSERVICE}get_user_educational/${user.id}`
            );
            setEducational_details(userEducationResponse.data);
          } else {
            const companyDetailsResponse = await axios.get(
              `${COMPANYSERVICE}get_particular_company_details/${user.id}`
            );
            setUserProfileData(companyDetailsResponse.data);
            await axios.get(JOBSSERVICE+`jobs_posted_by_company/${user && user.id}`).then((res)=>setAllJobsofCompany(res.data)).catch((err)=>console.log(err.message));
          }
        } catch (error: any) {
          console.error("Error fetching data:", error.message);
        }
      }
    };

    fetchData();
  }, [user]);

  useEffect(() => {
    if (user) {
      localStorage.setItem("Job_application_user_data", JSON.stringify(user));
      setWaitforLoad(true);
    } else {
      localStorage.removeItem("Job_application_user_data");
    }
  }, [user]);

  console.log(
    userProfileData,
    "userProfileData",
    educational_details,
    "educational_details",
    user?.id,
    "user"
  );

  return (
    <UserContext.Provider
      value={{ user, setUser, userProfileData, educational_details,allJobsofCompany,waitforLoad}}
    >
      {children}
    </UserContext.Provider>
  );
};
