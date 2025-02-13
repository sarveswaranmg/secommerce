import React, { useContext } from "react";
import { createContext, useState } from "react";
export const PaginationWrapper = createContext();
function PaginationContext({ children }) {
  const [pageNum, setPageNum] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  return (
    <PaginationWrapper.Provider
      value={{ pageNum, setPageNum, pageSize, setPageSize }}
    >
      {children}
    </PaginationWrapper.Provider>
  );
}
export const usePaginationContext = () => useContext(PaginationWrapper);

export default PaginationContext;
