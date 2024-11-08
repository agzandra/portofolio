import React from "react";
import CButton from "../components/c_button";

export default function LandingView() {
  return (
    <div className="flex justify-center min-h-screen items-center bg-gray-900">
      <h1>Welcome to My Simple Page</h1>
      <CButton styleId={2} label="Click Here" color="blue"></CButton>
      <p>This is a basic React page.</p>
    </div>
  );
}
