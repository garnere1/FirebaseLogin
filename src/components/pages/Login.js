import React from "react";
import SignIn from "../auth/SignIn";
import SignUp from "../auth/SignUp";

function Login() {
  return (
    <div className="login-page">
        <div className="sign-in-page">  	
            <input type="checkbox" id="chk" aria-hidden="true"></input>
            <SignUp />
            <SignIn />
        </div>
    </div>
  );
}

export default Login;