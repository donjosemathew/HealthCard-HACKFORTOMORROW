import React from "react";
import { Redirect } from "react-router-dom";
//Navigation bar
const Nav = ({ image, SignOut }) => {
  console.log(image);
  return (
    <nav className="nav p-4 pl-10 pr-10 bg-white flex flex-row justify-between items-center">
      <h1 className="text-5xl font-bold">
        Health<span className="font-medium">Carrd</span>
      </h1>
      <div className=" flex flex-row items-center justify-center">
        <button
          onClick={() => {
            SignOut();
          }}
          className="text-3xl cursor-pointer mr-5 font-bold subtxt tracking-tighter sub-txt"
        >
          Logout
        </button>
        <img
          src={image}
          alt="Profile "
          className="w-28 h-28 rounded-full cursor-pointer "
        />{" "}
      </div>
    </nav>
  );
};

export default Nav;
