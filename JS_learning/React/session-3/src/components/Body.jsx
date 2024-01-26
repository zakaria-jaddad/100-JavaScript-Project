import { useEffect, useState } from "react";
import Items from "../ui/Items";


const Body = (props) => {
  return (
    <div>
      <Items {...props} />
    </div>
  );
};
export default Body;
