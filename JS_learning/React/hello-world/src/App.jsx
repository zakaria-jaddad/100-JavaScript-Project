import React from "react";
import Welcome from "./components/Welcome";
import Profile from "./components/Profile";
import Form from "./components/Form"

export default function App() {
  return (
    <>
      {/* Profile component  */}
      <Profile foo="Click me Daddy!!" />

      {/* Form component */}
      <Form />
    </>
  );
}
