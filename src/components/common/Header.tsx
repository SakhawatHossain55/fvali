import React from "react";
import HeaderButtom from "./HeaderButtom";
import HeaderMiddel from "./HeaderMiddel";
import HeaderTop from "./HeaderTop";

const Header = () => {
  return (
    <div className="header">
      <HeaderTop />
      <HeaderMiddel />
      <HeaderButtom />
    </div>
  );
};

export default Header;
