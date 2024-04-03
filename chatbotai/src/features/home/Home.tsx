import React from "react";
import { Link } from "react-router-dom";
import GoogleSignIn from "../signIn/GoogleSignIn";
export default function Home() {
  return (
    <div>
      <Link to="/login ">Log In</Link>
      <br />
      <Link to="/chatbot">Chatbot</Link>
      <GoogleSignIn />
    </div>
  );
}
 