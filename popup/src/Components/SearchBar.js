import React from "react";
import "./SearchBar.css";
import { Link } from "react-router-dom";

const SearchBar = () => {
  return (
    <>
      <div className="searchBar">
        <div className="searchbar__box1">

          <Link to={"/classes"}>
            <button>Classes</button>
          </Link>

          <Link to={"/blog"}>
            <button>blog</button>
          </Link>
          
        </div>
      </div>
    </>
  );
};

export default SearchBar;
