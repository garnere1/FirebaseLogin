import React from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../data/firebase"
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault()
        const emailVal = e.target.email.value;
        sendPasswordResetEmail(auth, emailVal).then(auth => {
            alert("Check your email")
            navigate("/login")
        }).catch(err=>{
            alert(err.code)
        })
    }
    return(
        <div className="forgot-page">
            <h1>Forgot Password</h1>
            <p>Enter the email that you used when you signed up to receive a link to reset your password</p>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <input name="email" /><br /><br />
                <button>Reset</button>
            </form>
        </div>
    )
}

export default ForgotPassword;