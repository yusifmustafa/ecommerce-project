import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaShoppingCart } from "react-icons/fa";
import { Badge } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleOnClick = (e) => {
    e.preventDefault();
    navigate("/basket");
  };
  return (
    <nav style={{ backgroundColor: "#FF2D55" }}>
      <div className="nav-wrapper">
        <Link
          to="/"
          className="brand-logo"
          style={{
            color: "#fff",
            fontFamily: "Fuzzy Bubbles",
            fontWeight: 600,
          }}
        >
          Ecommerce
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="#/" style={{ color: "#fff" }}>
              Products
            </Link>
          </li>
          <li>
            <Link to="#/" style={{ color: "#fff" }}>
              Admin
            </Link>
          </li>
          <li className="shopping-icon">
            <Badge
              badgeContent={4}
              overlap="rectangular"
              style={{ color: "#fff", cursor: "pointer" }}
              onClick={handleOnClick}
            >
              <FaShoppingCart />
            </Badge>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
