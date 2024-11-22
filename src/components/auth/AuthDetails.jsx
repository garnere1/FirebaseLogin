import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../../data/firebase";
import { useNavigate } from "react-router-dom";

const AuthDetails = () => {
  const [currUser, setCurrUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrUser(user);
      }
    });

    return () => {
      listen();
    };
  }, [navigate]);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        sessionStorage.setItem("authorized", "false");
        console.log("Sign out successful");
        navigate("/login")
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="auth-details">
      {currUser ? (
        <>
          <p id="signed-in-as">{`Signed In as ${currUser.email}`}</p>
          <button onClick={userSignOut} id="sign-out-button">Sign Out</button>
        </>
      ) : (
        <p>Signed Out</p>
      )}
    </div>
  );
};

export default AuthDetails;