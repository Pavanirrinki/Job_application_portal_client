import { Paper } from "@mui/material";
import React, { useRef, useState } from "react";
import "./ForgotPassword.css";
type Props = {};

const ForgotPassword = (props: Props) => {
    const [otp, setOtp] = useState(new Array(6).fill(''));
    const inputsRef = useRef<any>([]);
  
    const handleInput = (e:any, index:number) => {
      const value = e.target.value;
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
  
      if (value.length === 1 && index < inputsRef.current.length - 1) {
        inputsRef.current[index + 1].focus();
      }
    };
  
    const handleKeyDown = (e:any, index:number) => {
      if (e.key === 'Backspace' && index > 0) {
        if (e.target.value === '') {
          inputsRef.current[index - 1].focus();
        } else {
          const newOtp = [...otp];
          newOtp[index] = '';
          setOtp(newOtp);
        }
      }
    };
  
    const handleSubmit = (e:any) => {
      e.preventDefault();
      const otpValue = otp.join('');
      console.log("Entered OTP is:", otpValue);
      // Do something with the OTP value
    };
  return (
    <div className="m-5 d-flex justify-content-center">
      <Paper>
        <section className="auth-screen">
          <div className="login">
            <div className="title-auth">
              <h5>OTP Authentication</h5>
              <p>Enter the 6 digit OTP sent to your email.</p>
            </div>
            <form action="" className="otp-form">
              {Array(6)
                .fill("")
                .map((_, index) => (
                  <input
                    key={index}
                    className="otp-field"
                    type="number"
                    name="otp-field[]"
                    maxLength={1}
                    ref={(el) => (inputsRef.current[index] = el)}
                   
                    onChange={(e) => handleInput(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                  />
                ))}
            </form>

            <input
              type="button"
              name="usern"
              value="Verify OTP"
              className="btn bg-primary"
              onClick={handleSubmit}
            />
          </div>
        </section>
      </Paper>
    </div>
  );
};

export default ForgotPassword;
