import React from "react";
import Ritik from "./Ritik.jpeg";
const Nav = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img
            src={Ritik}
            alt=""
            width="35"
            className="d-inline-block align-text-top"
          />
          &nbsp; Ritik Jaiswal
        </a>
      </div>
    </nav>
  );
};

export default Nav;
