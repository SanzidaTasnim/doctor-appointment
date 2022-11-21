import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword
} from "firebase/auth";
import { app } from "../../firebase.config";

export const googleSignIn = (e) => {
  const provider = new GoogleAuthProvider(app);
  const auth = getAuth(app);
  return signInWithPopup(auth, provider)
    .then((res) => {
      const copyUser = res.user;
      copyUser.success = true;
      copyUser.error = "";
      return copyUser;
    })
    .catch((error) => {
      const errorMessage = error.message;
      const copyUser = {};
      copyUser.error = errorMessage;
      copyUser.success = false;
      return copyUser;
    });
};

export const signInWithEmailPass = (email, password) => {
  const auth = getAuth(app);
  return createUserWithEmailAndPassword(auth, email, password)
    .then((res) => {
      const copyUser = res.user;
      copyUser.success = true;
      copyUser.error = "";
      return copyUser;
    })
    .catch((error) => {
      const errorMessage = error.message;
      const copyUser = {};
      copyUser.error = errorMessage;
      copyUser.success = false;
      return copyUser;
    });
};

