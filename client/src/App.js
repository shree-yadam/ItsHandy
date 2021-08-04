import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// App components
import Home from "./common_components/Home";
import Login from "./common_components/Login"
import Register from "./common_components/Register"
import NavBar from "./common_components/NavBar";
import RequestList from "./user/components/userRequests/RequestList";
import ProviderDashboard from "../src/service_provider/components/ProviderDashboard";
import RequestForm from "./user/components/userRequests/RequestForm";
import NewJobList from "../src/service_provider/components/NewJobList";
import AssignedJobList from "../src/service_provider/components/AssignedJobsList";
import JobDetails from "../src/service_provider/components/JobDetails";
import NoMatch from "./common_components/NoMatch";

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

            <Route path="/provider_dashboard">
              <ProviderDashboard currentUser={currentUser} />
            </Route>

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
