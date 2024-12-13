/**Preloader Component */

import React from "react";
const Preloader = () => {
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-base-100">
        <span className="loading loading-ball loading-xs"></span>
        <span className="loading loading-ball loading-sm"></span>
        <span className="loading loading-ball loading-md"></span>
        <span className="loading loading-ball loading-lg"></span>
      </div>
    </>
  );
};
export default Preloader;
