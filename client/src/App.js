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
  const [currentUserDetails, setCurrentUserDetails] = useState(null);
  return (

    <Router>
      <div className="App">
        <Switch>
          <main>
          <NavBar currentUserDetails={currentUserDetails}></NavBar>
            <Route path="/" exact>
              {/* <Home /> */}
            </Route>
            <Route path="/login">
              <Login currentUserDetails={currentUserDetails} setCurrentUserDetails={setCurrentUserDetails} />
            </Route>
            <Route path="/register">
              <Register currentUser={currentUserDetails} setCurrentUserDetails={setCurrentUserDetails}/>
              <Register />
              <Route path="/requests">
                <RequestListItem />
              </Route>
            </Route>
            <Route path="/dashboard">
              <div>
                <Dashboard currentUserDetails={currentUserDetails} />
              </div>
            </Route >
            <Route path="/listings">
              <NewJobList  currentUser={currentUser} openJobListingByCategory={openJobListingByCategory} />
            </Route>
          </main>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
