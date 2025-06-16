import React, { useState } from "react";
import Image from "../assets/logo.png";
import { header} from "./css/header";
import Dropdown from "./Dropdown";

function Header() {
  const [show, setShow] = useState(false);

  return (
    <div className={header.container}>
      <img src={Image} className="w-24" />
<div className="">
      <div className={header.search} >  
      <i className="fa-solid fa-magnifying-glass "></i>
        <input 
          type="text"
          className={header.input  } 
         
          placeholder="search product ..."
        />
        </div>
          
      </div>
      <div className=" flex justify-between w-80 ">
        <button
          onClick={() => setShow(!show)}
          className={`${header.dropdown} relative`}
        >
          <i className="fa-regular fa-flag text-base text-white p-2 py-1 bg-green-500 rounded-full"></i> English <i className="fa-solid fa-angle-down"></i>
          {show && <Dropdown />}
        </button>
        <p className={header.dropdown}>
          <i className="fa-regular fa-heart text-base text-white p-2 py-1 bg-green-500 rounded-full"></i> Favorite
        </p>
        <p className={header.dropdown}>
          <i className="fa-regular fa-user text-base text-white p-2 py-1 bg-green-500 rounded-full"></i> Account
        </p>
      </div>
    </div>
 
  );
}

export default Header;

