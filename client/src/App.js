import "./App.css";
import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Switch, useHistory} from "react-router-dom";
import Login  from "./components/Login";
import Register from "./components/Register"
import NavBar from "./components/NavBar";
import RequestListItem from "./components/RequestListItem";
import Dashboard from "./components/Dashboard";

function App() {
  //const [user, setUser] = createContext();
  const [currentUserDetails, setCurrentUserDetails] = useState(null);
  return (

    <Router>
      <div className="App">
      <NavBar currentUserDetails={currentUserDetails}></NavBar>
      <Switch>
        <Route path="/" exact>
          {/* <Home /> */}
        </Route>
        <Route path="/login">
          <Login currentUserDetails={currentUserDetails} setCurrentUserDetails={setCurrentUserDetails} />
        </Route>
        <Route path="/register">
          <Register currentUser={currentUserDetails} setCurrentUserDetails={setCurrentUserDetails} />
        </Route>
        <Route path="/requests">
          <RequestListItem />
        </Route>
        <Route path="/dashboard">
          <Dashboard currentUserDetails={currentUserDetails} />
        </Route >
        </Switch>
      </div>
    </Router>
  );
}

export default App;
