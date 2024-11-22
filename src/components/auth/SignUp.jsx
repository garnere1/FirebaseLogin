import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../data/firebase";
import validator from 'validator'
import { useNavigate } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState('Password must contain uppercase, lowercase, number, and symbol') 
  const [emailError, setEmailError] = useState("")
  const [showAlert, setShowAlert] = useState(false)
  const navigate = useNavigate();

  const validate = (value) => { 
      if (validator.isStrongPassword(value, { 
          minLength: 8, minLowercase: 1, 
          minUppercase: 1, minNumbers: 1, minSymbols: 1 
      })) { 
          setErrorMessage("") 
      } else { 
          setErrorMessage('Password must contain uppercase, lowercase, number, and symbol') 
      } 
  } 

  const validateEmail = (value) => {
    if(validator.isEmail(value)) {
      setEmailError("")
    }
    else {
      setEmailError("Invalid Email")
    }
  }

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        sessionStorage.setItem("authorized", "true")
        sendEmailVerification(auth.currentUser)
        navigate("/");
      })
      .catch((error) => {
        console.log(error.code);
        if(error.code === "auth/email-already-in-use") {
          setShowAlert(true)
        }
      });
  };

  return (
    <div className="signup">
      <form onSubmit={signUp}>
        <label htmlFor="chk" aria-hidden="true">Sign up</label>
        <Alert show={showAlert} style={{ fontWeight: 'bold', color: 'white'}}>
          <p>
            The email you have entered is already associated with an account.
          </p>
        </Alert>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => {
            validateEmail(e.target.value)
            setEmail(e.target.value)
          }}
        ></input>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => {
            validate(e.target.value)
            setPassword(e.target.value)
          }}
        ></input>
        {errorMessage === '' && emailError === '' ? <button type="submit">Sign Up</button> : 
                    <div>
                    <p style={{ 
                        fontWeight: 'bold', 
                        color: 'white', 
                    }}>{errorMessage}</p>
                    <p style={{ 
                      fontWeight: 'bold', 
                      color: 'white', 
                    }}>{emailError}</p>
                    </div>
                    } 
      </form>
    </div>
  );
};

export default SignUp;