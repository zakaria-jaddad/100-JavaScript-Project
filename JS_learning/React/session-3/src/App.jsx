import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Body from "./components/body";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const handelSearchQuery = (query) => setSearchQuery(query);

  // console.log(searchQuery);

  return (
    <>
      <Header onSearchChange={handelSearchQuery} />
      <Body query={searchQuery} />
    </>
  );
}
