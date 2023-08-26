import React from "react";
import "./Navbar.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";


const Navbar = () => {
  return (
    <>
      <div className="nav_bar">
        <div className="wrapper">
          <div className="search">
            <input className="inputs"  type="text" placeholder="Search..." />
            <SearchOutlinedIcon />
          </div>
          
           
            <div className="item">
              <img
                src="https://static-00.iconduck.com/assets.00/regional-indicator-symbol-letter-a-emoji-512x512-bpssxfme.png"
                alt=""
                className="avatar"
              />
              <span className="admin">Admin</span>
            </div>
          </div>
        </div>
    </>
  );
};

export default Navbar;
