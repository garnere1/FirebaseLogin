import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../data/firebase";
import { useNavigate } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Sign in successful")
        sessionStorage.setItem("authorized", "true")
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setShowAlert(true);
      });
  };

  const handleReset = () => {
    navigate("/reset");
  }

  return (
    <div className="login">
      <form onSubmit={signIn}>
        <label htmlFor="chk" aria-hidden="true">Login</label>
        <Alert show={showAlert} variant="danger">
          <p>
            The username or password you have entered is incorrect. If you have forgotten your password, click the 
            "forgot password" button.
          </p>
        </Alert>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit">Log In</button>
      </form>
      <button id="forgot-password" onClick={handleReset}>Forgot Password</button>
    </div>
  );
};

export default SignIn;