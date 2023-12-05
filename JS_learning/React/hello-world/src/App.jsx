import React from "react";
import Welcome from "./components/Welcome";
import Profile from "./components/Profile";

export default function App() {
  return (
    <>

      <Profile foo="i'm an inherited props!!" />
    </>
  );
}
