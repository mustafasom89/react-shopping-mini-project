import React from "react";
import "../../css/style.css";
import Cart from "../ShoppingCart/Cart";
import "bootstrap/dist/css/bootstrap.min.css";
import cartImage from "../../img/cartImage.png";
import logoImage from "../../img/logo2.jpg";

function Header({ loggedIn, username, onLogout }) {
  return (
    <header>
      <nav>
        <div className="header">
          {/* Logo and Title */}
          <h3>
            <img className="logo" src={logoImage} alt="Cart" />
            Online Shopping
          </h3>
          {loggedIn ? (
            <>
              {/* Welcome Message and Logout */}
              <span className="welcome-message">
                Welcome,{" "}
                <i>
                  <b>{username}</b>
                </i>
                ! Click for{" "}
                <button className="logout-button" onClick={onLogout}>
                  Log Out
                </button>
              </span>
              {/* Shopping Cart */}
              <Cart />
              {/*<button onClick={onLogout}>Log Out</button>*/}
            </>
          ) : (
            // Login Prompt
            <span>Please log in.</span>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
