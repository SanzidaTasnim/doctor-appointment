import React from "react";
import logIn from "./../../images/login.png";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import "./LogIn.css";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../../firebase.config";

library.add(faGoogle);

const LogIn = () => {
  const provider = new GoogleAuthProvider();

  const googleSignIn = () => {
    console.log("hi");
    const auth = getAuth(app);
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("success");
      })
      .catch((error) => {});
  };

  return (
    <div className="row container m-auto">
      <div className="col-md-5 login-form">
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email Address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              autoComplete=""
            />
          </div>
          <button type="submit" className="btn btn-primary sign-in">
            Sign in
          </button>
          <button
            type="submit"
            className="btn btn-primary google-button"
            onClick={googleSignIn}
          >
            <FontAwesomeIcon icon={faGoogle} />
            <span className="google-text">Google Sign In</span>
          </button>
        </form>
      </div>
      <div className="col-md-7 login-img">
        <img src={logIn} alt="logIn" />
      </div>
    </div>
  );
};

export default LogIn;
