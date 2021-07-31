import "./App.css";
import React, { useContext, createContext } from 'react';
import { BrowserRouter as Router, Link, Route, Switch, useHistory} from "react-router-dom";
import Login  from "./components/Login";
import Register from "./components/Register"
import NavBar from "./components/NavBar";
import ProviderDashboard from './components/ProviderDashboard';
import RequestListItem from "./components/RequestListItem";
import NewJobList from "./components/NewJobListItem";


function App() {
  //const [user, setUser] = createContext();
  // const [currentUserDetails, setCurrentUSerDetails] = set
  // const currentUser =useContext(null);
  const currentUser = {
    id: 1,
    first_name: 'service',
    last_name: 'provider',
    is_provider: true
  };

  return (

    <Router>
      <div className="App">
        <Switch>
          <main>
          <NavBar currentUser={currentUser}></NavBar>
            <Route path="/" exact>
              {/* <Home /> */}
            </Route>
            <Route path="/login">
              <Login currentUser={currentUser} />
            </Route>
            <Route path="/register">
              <Register currentUser={currentUser}/>
              <Register />
              <Route path="/requests">
                <RequestListItem />
              </Route>
            </Route>
            <Route path="/dashboard">
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
