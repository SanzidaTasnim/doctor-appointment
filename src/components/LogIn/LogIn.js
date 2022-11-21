import React, { useState , useContext } from "react";
import logIn from "./../../images/login.png";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import {useLocation , useNavigate} from 'react-router';
import "./LogIn.css";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { app } from "../../firebase.config";
import { createUser } from "../../App";

library.add(faGoogle);

const LogIn = () => {
  const [loggedInUser , setLoggedInUser] = useContext(createUser);
  const location = useLocation();
  const navigate = useNavigate();

  const provider = new GoogleAuthProvider(app);
  const [user, setUser] = useState({
    email: "",
    password: "",
    success: false,
    error: "",
  });

  const handleBlur = (e) => {
    let isFieldValid = true;
    if (e.target.name === "email") {
      isFieldValid = /^\S+@\S+\.\S+$/.test(e.target.value);
    }
    if (e.target.name === "password") {
      const passwordLength = e.target.value.length > 6;
      const isPasswordValid = /^(?=.*[0-9])/.test(e.target.value);
      isFieldValid = passwordLength && isPasswordValid;
    }
    if (isFieldValid) {
      const copyUser = { ...user };
      copyUser[e.target.name] = e.target.value;
      setUser(copyUser);
    }
  };

  const googleSignIn = (e) => {
    const auth = getAuth(app);
    signInWithPopup(auth, provider)
      .then((userCredential) => {
        const user = userCredential.user;
          const copyUser = { ...user };
          copyUser.success = true;
          copyUser.error = "";
          setLoggedInUser(copyUser);
          setUser(copyUser);
          location.state?.from && navigate(location.state.from);
      })
      .catch((error) => {
        const errorMessage = error.message;
          const copyUser = { ...user };
          copyUser.error = errorMessage;
          copyUser.success = false;
          setUser(copyUser);
      });
    e.preventDefault();
  };


  const signInWithEmailPass = (e) => {
    if (user.email && user.password) {
      const auth = getAuth(app);
      createUserWithEmailAndPassword(auth, user.email, user.password)
        .then((userCredential) => {
          const user = userCredential.user;
          const copyUser = { ...user };
          copyUser.success = true;
          copyUser.error = "";
          setLoggedInUser(copyUser);
          setUser(copyUser);
          location.state?.from && navigate(location.state.from);
        })
        .catch((error) => {
          const errorMessage = error.message;
          const copyUser = { ...user };
          copyUser.error = errorMessage;
          copyUser.success = false;
          setUser(copyUser);
        });
    }
    e.preventDefault();
  };

  return (
    <div className="row container m-auto">
      <div className="col-md-5 login-form">
        <h2>Login</h2>
        <form action="#" method="POST" onSubmit={signInWithEmailPass}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email Address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              onBlur={handleBlur}
              aria-describedby="emailHelp"
              name="email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              autoComplete=""
              onBlur={handleBlur}
              name="password"
            />
          </div>
          <input
            type="submit"
            value="Sign in"
            className="btn btn-primary sign-in"
          />
        </form>
        <button
          type="submit"
          className="btn btn-primary google-button"
          onClick={googleSignIn}
        >
          <FontAwesomeIcon icon={faGoogle} />
          <span className="google-text">Google Sign In</span>
        </button>

        {user.success ? (
          <p
            style={{
              textAlign: "center",
              marginTop: "10px",
              color: "green",
              fontWeight: "bold",
            }}
          >
            Signed In Successfully
          </p>
        ) : (
          <p
            style={{
              textAlign: "center",
              marginTop: "10px",
              color: "red",
              fontWeight: "bold",
            }}
          >
            {user.error}
          </p>
        )}
      </div>
      <div className="col-md-7 login-img">
        <img src={logIn} alt="logIn" />
      </div>
    </div>
  );
};

export default LogIn;
