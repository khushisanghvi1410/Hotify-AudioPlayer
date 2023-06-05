import React, { useState } from "react";
import Login from "../components/Login";
import { Button } from "@mui/material";
import SignUp from "../components/SignUp";

function Login_SignUp() {
  const [activeLogin, setActiveLogin] = useState(true);
  const [activeSignUp, setActiveSignUp] = useState(false);
  return (
    <div className="flex justify-center items-center align-middle h-[800px]">
      <div className=" bg-purple-400 w-1/2  h-[500px] rounded-3xl  items-start mx-auto my-auto">
        <div className="my-5 flex w-full justify-around mb-20">
          <div className=" border-black border w-[50%] text-center mx-5 rounded-md cursor-pointer ">
            <Button
              variant="text"
              onClick={() => {
                
                setActiveLogin(true);
              }}
            >
              Login
            </Button>
          </div>
          <div
            className={`border-black  border w-[50%] text-center mx-5 rounded-md cursor-pointer`}
            onClick={() => {
                
                setActiveSignUp(true);
                setActiveLogin(false)
              }}
          >
            <Button
              variant="text"
           
            >
              SignUp
            </Button>
          </div>
        </div>

        <div>{activeLogin ? <Login></Login> : <SignUp></SignUp>}</div>
      </div>
    </div>
  );
}

export default Login_SignUp;
