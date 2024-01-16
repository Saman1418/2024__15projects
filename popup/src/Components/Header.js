import React from "react";
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import { Link } from "react-router-dom";

const Header = ({ setShow }) => {

  return (
    <div className="header">
      <div className="box1">
        <button>Register</button>
        <button
          onClick={() => {
            setShow(true);
          }}
        >
          Login
        </button>
      </div>


      <div className="box3">
      <Link to={"/searchBar"}>
          <SearchIcon/>
        </Link>
      <Link to={"/blogs"}>
          <button>Blogs</button>
        </Link>
        
        <Link to={"/myAccount"}>
          <button>My Account</button>
        </Link>
        <Link to={"/Login"}>
          <button>login</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
