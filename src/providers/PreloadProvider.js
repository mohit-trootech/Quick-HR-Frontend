/**Preload Provider */
import React, { useState } from "react";
import { PreloadContext } from "../context/Contexts";
const PreloadProvider = ({ children }) => {
  const [preload, setPreload] = useState(true);
  const updatePreloader = () => {
    setPreload(false);
  };
  const data = { preload, updatePreloader };
  return (
    <PreloadContext.Provider value={data}>{children}</PreloadContext.Provider>
  );
};
export default PreloadProvider;
