import React from "react";
import { auth, provider } from "../firebase";

export default function Login() {
  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <div className="grid place-items-center mt-20">
      <img
        src="https://links.papareact.com/t4i"
        alt="logo"
        height={400}
        width={400}
      />
      <h1
        className="p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer mt-10"
        onClick={signIn}
      >
        Login with Facebook
      </h1>
    </div>
  );
}
