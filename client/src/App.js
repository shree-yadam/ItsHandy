import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// App components
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import NavBar from "./components/NavBar";
import RequestList from "./components/userRequests/RequestList";
import Dashboard from "./components/Dashboard";
import RequestForm from "./components/RequestForm";
import NewJobList from "./components/NewJobList";
import AssignedJobList from "./components/AssignedJobsList";
//import ProviderDashboard from "./components/ProviderDashboard";

function App() {
  //const [user, setUser] = createContext();
  // const [currentUserDetails, setCurrentUSerDetails] = set
  // const currentUser =useContext(null);

  // const currentUser = {
  //   id: 1,
  //   first_name: "Joe",
  //   last_name: "Smith",
  //   email: "joe@smith.com",
  // };
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <div className="App">
      <Router>
        <NavBar
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
        ></NavBar>
        <main>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>

            <Route path="/login">
              <Login
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            </Route>

            <Route path="/register">
              <Register
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            </Route>

            <Route path="/requests" currentUser={currentUser}>
              <RequestList />
            </Route>

            <Route exact path="/requests/new">
              <RequestForm />
            </Route>

            <Route path="/dashboard">
              <Dashboard currentUser={currentUser} />
            </Route>

            <Route path="/listings">
              <NewJobList currentUser={currentUser} />
            </Route>

            <Route path="/assigned_jobs">
              <AssignedJobList currentUser={currentUser} />
            </Route>

            <Route path="*">
              <h2>404 NOT FOUND</h2>
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
