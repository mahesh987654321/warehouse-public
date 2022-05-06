import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useSendPasswordResetEmail,
} from "react-firebase-hooks/auth";
import "./Regester.css";
import { Link, useNavigate } from "react-router-dom";
import auth from "../firebaseInit";

const Regester = () => {
  const [signInWithGoogle, user2] = useSignInWithGoogle(auth);
  const [email, setEmail] = useState("");
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
  const [password, setPassword] = useState("");
  const [conpass, setConpass] = useState("");
  const [error1, setError] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const navigate = useNavigate();
  const handelEmail = (event) => {
    setEmail(event.target.value);
  };
  const handelPassword = (event) => {
    setPassword(event.target.value);
  };
  const handelConfirmPAss = (event) => {
    setConpass(event.target.value);
  };

  if (loading) {
    return <p>Loading...</p>;
  }
  if (user || user2) {
    navigate("/");
  }
  const handelSubmit = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(email, password);
    if (password !== conpass) {
      setError("Password is not match");
      return;
    }
  };
  return (
    <div className="bg">
      <Form onSubmit={handelSubmit} className="w-50 mx-auto mt-5">
        <h3 className="text-center">Regester Form</h3>
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
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            onBlur={handelConfirmPAss}
            type="password"
            placeholder="Password"
          />
          <p className="text-danger">{error1}</p>
        </Form.Group>

        <Link to="/login">Already Have a account</Link>

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
        <Button className="w-100" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <p>Reg</p>
    </div>
  );
};

export default Regester;
