import React from "react";
//Navigation bar
const Nav = () => {
  return (
    <nav className="nav p-4 pl-10 pr-10 bg-white flex flex-row justify-between items-center">
      <h1 className="text-5xl font-bold">
        Health<span className="font-medium">Carrd</span>
      </h1>
      <img
        src="https://randomuser.me/api/portraits/women/13.jpg"
        alt="Profile "
        className="w-28 h-28 rounded-full "
      />
    </nav>
  );
};

export default Nav;
