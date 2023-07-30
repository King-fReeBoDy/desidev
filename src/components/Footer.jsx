import React from "react";

const Footer = () => {
  return (
    <div className="px-7 py-4 text-center bg-blue-600 text-slate-50">
      &copy;{new Date().getFullYear()} developed by DESi
    </div>
  );
};

export default Footer;
