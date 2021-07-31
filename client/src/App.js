import "./App.css";
import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Switch, useHistory} from "react-router-dom";
import Login  from "./components/Login";
import Register from "./components/Register"
import NavBar from "./components/NavBar";
import RequestListItem from "./components/RequestListItem";
import ProviderDashboard from "./components/ProviderDashboard";

function App() {
  //const [user, setUser] = createContext();
  const [currentUserDetails, setCurrentUserDetails] = useState(null);
  // const currentUser =useContext(null);
  // const currentUser = {
  //   id: 1,
  //   first_name: 'Joe',
  //   last_name: 'Smith',
  //   email: 'joe@smith.com'
  // };

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
            <Route path="/dashboard" currentUserDetails={currentUserDetails}>
              {/* {currentUserDetails && currentUserDetails.is_Provider &&
              <div>
                <p>HERE!! </p>
                <ProviderDashboard currentUserDetails={currentUserDetails} />
              </div> */}
              <div>HERE</div>
              <div>{currentUserDetails && currentUserDetails.is_provider}</div>
            </Route >
          </main>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
