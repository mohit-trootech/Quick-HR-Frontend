/**Pagination Provider */
import { useState } from "react";
import { PaginationContext } from "../context/Contexts";
const PaginationProvider = ({ children }) => {
  const [previous, setPrevious] = useState(null);
  const [next, setNext] = useState(null);
  const [count, setCount] = useState(0);
  const data = {
    previous,
    setPrevious,
    next,
    setNext,
    count,
    setCount,
  };
  return (
    <PaginationContext.Provider value={data}>
      {children}
    </PaginationContext.Provider>
  );
};
export default PaginationProvider;
