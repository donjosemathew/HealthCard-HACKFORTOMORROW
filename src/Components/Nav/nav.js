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
      <img
        onClick={() => {
          SignOut();
        }}
        src={image}
        alt="Profile "
        className="w-28 h-28 rounded-full cursor-pointer "
      />
    </nav>
  );
};

export default Nav;
