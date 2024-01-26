import { useState, useEffect } from "react";
import fetchStoreData from "../data/fetchStoreData";

const Header = ({ onSearchChange }) => {

  const addQuery = (event) => {
    const query = event.target.value;
    onSearchChange(query);
  };

  return (
    <header>
      <div className="mx-auto flex justify-center items-center ">
        <input
          type="text"
          placeholder="Search For Something.."
          onChange={addQuery}
          className="border p-2"
        />
      </div>
    </header>
  );
};

export default Header;
