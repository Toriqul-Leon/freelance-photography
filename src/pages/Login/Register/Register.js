import React from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const Register = () => {
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const navigateLogin = () => {
    navigate("/login");
  };

  if (user) {
    navigate("/home");
  }
  const handleRegister = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    createUserWithEmailAndPassword(email, password);
  };
  return (
    <div className="register-form">
      <h2>Please Register</h2>
      <form action=" " onSubmit={handleRegister}>
        <input
          required
          type="email"
          name="email"
          id=""
          placeholder="Your Email"
        />

        <input
          required
          type="password"
          name="password"
          id=""
          placeholder="Password"
        />
        {user ? "" : error?.message}
        <input type="submit" value="Register" />
      </form>
      <p>
        Already Have an Account?{" "}
        <span
          className="text-primary label "
          role="button"
          onClick={navigateLogin}
        >
          Login
        </span>
      </p>
    </div>
  );
};

export default Register;
