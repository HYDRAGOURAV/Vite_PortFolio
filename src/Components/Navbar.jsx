import React from "react";
import { useState } from "react";
import '../../public/CSS/Navbar.css';
import Logo from '../../public/image/LOGO.png';
// import Main_Page_1 from "./Main_Page_1";
function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const handleToggle = () => {
    setIsMobile(!isMobile);
  };
  const Handle =()=>{
    window.scrollTo({ top: 2200, behavior: "smooth" });
  }
  const Handle_contact =()=>{
    window.scrollTo({ top: 2550, behavior: "smooth" });
  }
  return (
    <>
      <nav className="navbar">
        <div className="logo"><img src={Logo} alt=""/></div>
        <ul className={isMobile ? "nav-links mobile" : "nav-links"}>
          <li><a href="/">Home</a></li>
          <li onClick={Handle}>About</li>
          <li onClick={Handle_contact} >Contact</li>
        </ul>
        <div className="menu-icon" onClick={handleToggle}>
          &#9776;
        </div>
      </nav>
    </>
  );
}

export default Navbar;
