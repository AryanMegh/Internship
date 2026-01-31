import { SignIn } from "@clerk/clerk-react";
import React from "react";
import "../../../assets/CSS/Signin_layout.css";

function SignInPage() {
  return (
    <div className="signin-container">
      <SignIn />
    </div>
  );
}

export default SignInPage;