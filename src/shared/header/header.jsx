import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./header.css";

const Header = ({ logo, title, subTitle }) => {
  const [search, setSearch] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    setSearch(e.target.value);
    navigate(`/?search=${e.target.value}`);
  };

  return (
    <div className="header">
      <div className="left">
        <img className="left-logo" src={logo} alt="logo" />
        <div className="info">
          <h4>{title}</h4>
          <p>{subTitle}</p>
        </div>
      </div>
      <input
        type="text"
        className="inpt"
        placeholder="Search movie"
        value={search}
        onChange={handleSearch}
      />
      <div className="right">
        <Link
          to="/"
          className={location.pathname === "/" ? "active link" : "link"}
        >
          Home
        </Link>
      </div>
    </div>
  );
};

export default Header;
