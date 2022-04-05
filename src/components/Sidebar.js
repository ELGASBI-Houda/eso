import React, { useState } from "react";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Sidebar.css";
import { logo } from '../assets';

function Sidebar() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
        <nav className="Sidebar"  >

         {/* SideBar Button */}
        <div className="SidebarButton " 
        /* style={sidebarOpen ? {transform: "rotate(180deg)"} : ""} */
        onClick={() => setSidebarOpen}>
            <AiIcons.AiOutlineLeft />
         </div>

         {/* Logo */}
          <div className="logo">
              <img src={ logo } alt=""/>
          </div>

          { <ul className="nav-menu-items" >
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    <div className="icon">
                    {item.icon}
                    </div>
                    <span className="title">{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul> }
        </nav>
    </>
  );
}

export default Sidebar;
