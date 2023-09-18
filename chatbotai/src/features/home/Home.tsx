import React from "react";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Link to="/login ">Log In</Link>
      <br />
      <Link to="/chatbot">Chatbot</Link>
    </div>
  );
}
 