import React from "react";
import "./Navbar.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";

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
