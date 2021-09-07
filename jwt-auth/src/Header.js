import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { CurrencyContext } from './createContext';
const Header = ({ logoutUser, setLogoutUser }) => {
  const [login, setLogin] = useState("");

  useEffect(() => {
    hydrateStateWithLocalStorage();
  }, [logoutUser]);

  const logout = () => {
    localStorage.removeItem("login");
    setLogoutUser(true);
  };

  const hydrateStateWithLocalStorage = () => {
    if (localStorage.hasOwnProperty("login")) {
      let value = localStorage.getItem("login");
      try {
        value = JSON.parse(value);
        setLogin(value);
      } catch (e) {
        setLogin("");
      }
    }
  };
  const currency = React.useContext(CurrencyContext);
  return (
    <div>
      <h1>
        {currency}
        </h1>
      <header style={{ marginTop: "20px" }}>
        {!logoutUser && login && login.userLogin ? (
          <Button
            style={{ width: "100px" }}
            variant="contained"
            color="secondary"
            onClick={logout}
          >
            Logout
          </Button>
        ) : (
          <Link to="/login">
            <Button
              style={{ width: "100px" }}
              variant="contained"
              color="secondary"
            >
              Login
            </Button>
          </Link>
        )}
      </header>
      
    </div>
  );
};

export default Header;
