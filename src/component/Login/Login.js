import React, { useState } from "react";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
  useSendPasswordResetEmail,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../firebaseInit";
import "./Login.css";
const Login = () => {
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
  const [email, setEmail] = useState("");
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [password, setPassword] = useState("");
  const [error1, setError1] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth, { sendEmailVerification: true });
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  let errorElement;
  const navigate = useNavigate();
  const handelEmail = (event) => {
    setEmail(event.target.value);
  };
  console.log();
  const handelPassword = (event) => {
    setPassword(event.target.value);
  };
  const handelButton = async (event) => {
    event.preventDefault();
    await signInWithEmailAndPassword(email, password);
    // const { data } = await axios.post(`http://localhost:5000/login`, { email });
    // localStorage.setItem("accessToken", data.accessToken);
    // navigate(from, { replace: true });
    if (email !== password) {
      setError1("Something wrong");
      return;
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    navigate(from, { replace: true });
  }
  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }
  return (
    <div className="bg">
      <Form onSubmit={handelButton} className="w-50 mt-5 mx-auto">
        <h2 className="text-center">Login Here</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onBlur={handelEmail}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onBlur={handelPassword}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        {errorElement}
        <p>{error1}</p>
        <button
          onClick={() => signInWithGoogle()}
          className="bg-dark text-white"
        >
          Sign in with Google
        </button>
        <button
          onClick={async () => {
            await sendPasswordResetEmail(email);
            alert("Sent email");
          }}
        >
          Reset password
        </button>
        <Link to="/regester">Please Regester</Link>
        <Button className="w-100" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
