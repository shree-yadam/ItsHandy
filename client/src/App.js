import "./App.css";
import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Switch, useHistory} from "react-router-dom";
import Login  from "./components/Login";
import Register from "./components/Register"
import NavBar from "./components/NavBar";
import RequestListItem from "./components/RequestListItem";
import Dashboard from "./components/Dashboard";
import NewJobList from "./components/NewJobListItem";


function App() {
  const [currentUser, setCurrentUser] = useState(null);

  return (

    <Router>
      <div className="App">
          <NavBar currentUser={currentUser}></NavBar>
        <Switch>
            <Route path="/" exact>
              {/* <Home /> */}
            </Route>
            <Route path="/login">
              <Login currentUser={currentUser} setCurrentUser={setCurrentUser} />
            </Route>
            <Route path="/register">
              <Register currentUser={currentUser} setCurrentUser={setCurrentUser}/>
              <Register />
              <Route path="/requests">
                <RequestListItem />
              </Route>
            </Route>
            <Route path="/dashboard">
                <Dashboard currentUser={currentUser} />
            </Route >
            <Route path="/listings">
              <NewJobList  currentUser={currentUser} />
            </Route>
            <Route path="*">
              <h2>404 NOT FOUND</h2>
            </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
