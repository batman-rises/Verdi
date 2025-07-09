import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    //create links to signin and signup pages
    <nav>
      <ul>
        <li>
          <Link to="/login">LogIn</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
