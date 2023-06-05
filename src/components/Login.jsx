import React from "react";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import { Button } from '@mui/material'
function Login() {
  // const data = axios
  //   .get("https://www.google.com/recaptcha/api.js")
  //   .then(() => {
  //     console.log("Succenfuly");
  //   })
  //   .catch((e) => {
  //     console.log(e);
  //   });

  return (
    <div className="justify-center bg-yellow-400 border-2 flex h-52  mx-auto w-[80%] items-center ">
      <div>
        <div className=" my-2">
          <label>Email</label>
          <input className="w-full"></input>
        </div>
        <div className="">
          <label>Password</label>
          <input className="w-full"></input>
        </div>

        <ReCAPTCHA sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" onChange={(value)=>{console.log(value)}} ></ReCAPTCHA>

        <div className="mx-auto  items-center flex justify-center my-5">
          <Button variant="contained" sx={{ marginLeft: "5px" }}>
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
