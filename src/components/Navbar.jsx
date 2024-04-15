import React from "react";
import { appleImg, bagImg, searchImg } from "../utils/index";
import {navLists} from '../constants/index'
const Navbar = () => {
  
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex screen-max-width w-full">
        <img src={appleImg} alt="logo" width={14} height={18} />
        <div className="flex">
          {navLists.map((element, i) => (
            <div key={i}>{element}</div>
          ))}
        </div>
        <div className="flex justify-center flex-1 max-sm:hidden">
          <img src={searchImg} alt="search" width={18} height={18} />
          <img src={bagImg} alt="bag" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
