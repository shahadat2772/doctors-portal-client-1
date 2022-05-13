import React from "react";

const MainBtn = ({ children }) => {
  return (
    <button className="bg-gradient-to-r from-primary to-secondary btn text-white border-0">
      {children}
    </button>
  );
};

export default MainBtn;
