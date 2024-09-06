import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";

const Form = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <>
      <div className="mx-auto p-8 mt-7 bg-white border border-gray-300 rounded-lg shadow-xl w-full max-w-sm">
        <h3 className="text-2xl mb-10 text-center font-bold">
          {isSignUp ? "SignUp" : "Login"}
        </h3>

        <input
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          type="email"
          placeholder="Email or phone number"
          required
        />
        <input
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          type="password"
          placeholder={isSignUp ? "Create Password" : "Password"}
          required
        />
        {isSignUp && (
          <input
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            type="password"
            placeholder="Confirm Password"
            required
          />
        )}
        {!isSignUp && (
          <a
            href="#"
            className="text-blue-600 hover:underline block text-center mb-5"
          >
            Forgot password?
          </a>
        )}
        <button
          type="button"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg mb-2"
        >
          {isSignUp ? "SignUp" : "Login"}
        </button>
        <span className="block text-center mb-5">
          {isSignUp ? "Already have an account? " : "Don't have an account? "}
          <span className="text-blue-600 cursor-pointer" onClick={toggleForm}>
            {isSignUp ? "Login" : "Sign Up"}
          </span>
        </span>
        <div className="flex items-center pb-2">
          <hr className="flex-grow border-t border-gray-400" />
          <span className="px-2 text-gray-400">Or</span>
          <hr className="flex-grow border-t border-gray-400" />
        </div>

        <button
          type="button"
          className="w-full bg-blue-900 text-white font-normal py-3 px-6 rounded-lg mb-2 flex items-center justify-center relative"
        >
          <FontAwesomeIcon icon={faFacebook} className="absolute left-4" />
          <span className="mx-auto">
            {isSignUp ? "Sign Up with Facebook" : "Login with Facebook"}
          </span>
        </button>
        <button
          type="button"
          className="w-full font-normal border-2 py-3 px-6 rounded-lg mb-2 flex items-center justify-center relative"
        >
          <FontAwesomeIcon icon={faGoogle} className="absolute left-4" />
          <span className="mx-auto">
            {isSignUp ? "Sign Up with Google" : "Login with Google"}
          </span>
        </button>
      </div>
    </>
  );
};

export default Form;
