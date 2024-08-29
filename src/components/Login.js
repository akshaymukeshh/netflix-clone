import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/1d29f9a4-1900-43dc-a420-99044f734ee2/cc3b7bcb-3f79-449e-a37c-26ffb20fce3c/IN-en-20240826-POP_SIGNUP_TWO_WEEKS-perspective_WEB_7a193436-88c7-4f66-a8f0-e191d3b26d13_large.jpg"
          alt="bg"
        />
      </div>
      <form className="w-3/12 px-14 py-14 absolute bg-black bg-opacity-75 my-36 mx-auto right-0 left-0 text-white">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 my-4 w-full bg-gray-700"
          />
        )}

        <input
          type="text"
          placeholder="Email Address"
          className="p-3 my-4 w-full bg-gray-700"
        />
        {/* 
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Mobile Number"
            className="p-3 my-4 w-full bg-gray-700"
          />
        )} */}

        <input
          type="password"
          placeholder="Password"
          className="p-3 my-4 w-full bg-gray-700"
        />
        <button className="p-3 my-6 bg-red-700 rounded-lg w-full">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "Already A User ! Sign In Now."
            : "New to Netflix ? Sign Up now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
