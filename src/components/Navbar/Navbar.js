import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaShoppingCart, FaSignOutAlt } from "react-icons/fa";
import { Badge } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const Navbar = () => {
  const notify = () =>
    toast("Çıxış edilir", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const navigate = useNavigate();
  const handleOnClick = (e) => {
    e.preventDefault();
    navigate("/basket");
  };
  const handleSignOut = () => {
    notify();
    setTimeout(() => {
      navigate("/");
    }, 1500);
  };
  return (
    <nav style={{ backgroundColor: "#FF2D55" }}>
      <div className="nav-wrapper">
        <Link
          to="/card"
          className="brand-logo"
          style={{
            color: "#fff",
            fontFamily: "Fuzzy Bubbles",
            fontWeight: 600,
          }}
        >
          Ecommerce
        </Link>
        <ul id="nav-mobile" className="right">
          <li>
            <Link to="#/" style={{ color: "#fff" }}>
              Products
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
          <li
            className="shopping-icon"
            style={{
              marginTop: "1.7rem",
              cursor: "pointer",
              overlap: "rectangular",
            }}
          >
            {" "}
            <FaSignOutAlt onClick={handleSignOut} />
          </li>
        </ul>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </nav>
  );
};

export default Navbar;
