import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Totality Corp
        </Link>
        <ul className="navbar-nav ms-auto ">
          <li className="nav-item">
            <Link className="nav-link" to="/cart">
              <ShoppingCart size={32} />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
