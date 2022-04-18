import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const navigate = useNavigate();

  if (user) {
    navigate("/home");
   }
  return (
    <div>
      <small className="text-danger">{error ? error?.message : ""}</small>
      <div className="d-flex align-items-center ">
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        <p className="p-1 m-1">or</p>

        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-primary w-75 p-2 fs-5"
        >
          {" "}
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/google-470-675827.png"
            alt=""
            width={"25px"}
            height={"30px"}
          />{" "}
          Google Sign In
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
