import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Header from "./Header";
import Register from "./Register";
import { CurrencyContext } from './createContext';

function App() {
  const [logoutUser, setLogoutUser] = useState(false);
  return (
    <BrowserRouter>
      <div className="App">
       
        <Switch>
        <CurrencyContext.Provider value={"Welcome to demo application"}>

          <Route exact path="/">
            <Header logoutUser={logoutUser} setLogoutUser={setLogoutUser} />
            <Home logoutUser={logoutUser} />
          </Route>

          <Route path="/login">
            <Login setLogoutUser={setLogoutUser} />
          </Route>
          
          <Route path="/register">
            <Register setLogoutUser={setLogoutUser} />
          </Route>

          </CurrencyContext.Provider>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
