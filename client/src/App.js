import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// App components
import Home from "./Components/Home";
import Login from "./Components/Login"
import Register from "./Components/Register";
import NavBar from "./Components/NavBar";
import RequestList from "./Components/user/RequestList";
import ProviderDashboard from "./Components/service_provider/ProviderDashboard";
import UserDashboard from "./Components/user/UserDashboard"
import RequestForm from "./Components/user/RequestForm";
import NewJobList from "./Components/service_provider/NewJobList";
import AssignedJobList from "./Components/service_provider/AssignedJobsList";
import JobDetails from "./Components/service_provider/JobDetails";
import NoMatch from "./Components/NoMatch";

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

            <Route
              path={`/client/:userId/requests`}
              exact
              currentUser={currentUser}
            >
              <RequestList currentUser={currentUser}/>
            </Route>

            {/* Route for creating new requests by logged in user */}
            <Route path={`/client/:userId/requests/new`} exact>
              <RequestForm currentUser={currentUser} />
            </Route>
{/* for provider */}
            <Route path="/provider/:userId">
              <ProviderDashboard currentUser={currentUser} />
            </Route>
{/* temp */}
            <Route path="/client/:userId">
              <UserDashboard currentUser={currentUser}></UserDashboard>
            </Route>
{/* temp */}
            <Route path="/new_listings">
              <NewJobList currentUser={currentUser} />
            </Route>

            <Route path="/assigned_jobs">
              <AssignedJobList currentUser={currentUser} />
            </Route>

            <Route path="/new_listing_detail">
              <JobDetails currentUser={currentUser} />
            </Route>

            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
