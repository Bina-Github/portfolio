import React from "react";

const Footer = () => {
  return (
    <div className="clip-footer absolute right-0 bottom-0 bg-cGray h-28 w-full flex justify-between">
      <div className="bottom-0 bg-cBlack w-full flex-1"></div>
      <div className="bottom-0 w-full max-w-[2000px] flex justify-end items-center">
        <p className="relative float-right text-cDark font-medium mt-5 mr-4">
          &copy; 2023 Sabine Kokot
        </p>
      </div>
      <div className="bottom-0 w-full flex-1"></div>
    </div>
  );
};

export default Footer;
