import React from "react";
import Button from "./Button";
import { Link } from "react-router";

const Error = () => {
  return (
    <div className="f-full flex flex-col  items-center justify-center">
      <img className="max-w-1/3" src="/images/error.png" alt="" />
      <div className="text-center">
        <h2 className="text-[40px] font-bold my-5">Oops! page not found</h2>
        
        <Link to="/">
          <Button
            content="Back to Home"
            styles="bg-[#00B207] py-[14px] px-[27px] rounded-full text-white font-bold text-[14px] hover:bg-transparent hover:outline hover:outline-[#00B207] hover:text-[#000] cursor-pointer"
          />
        </Link>
      </div>
    </div>
  );
};

export default Error;
