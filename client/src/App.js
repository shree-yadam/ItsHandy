import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// App components

import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import NavBar from "./components/NavBar";
import RequestList from "./components/user/RequestList";
import ProviderDashboard from "./components/service_provider/ProviderDashboard";
import UserDashboard from "./components/user/UserDashboard";
import RequestForm from "./components/user/RequestForm";
import JobDetails from "./components/service_provider/JobDetails";
import NewJobList from "./components/service_provider/NewJobList";
import AssignedJobList from "./components/service_provider/AssignedJobsList";
import NoMatch from "./components/NoMatch";
import OfferList from "./components/user/OfferList";

function App() {
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
              <RequestList currentUser={currentUser} />
            </Route>

            {/* Route for creating new requests by logged in user */}
            <Route path={`/client/:userId/requests/new`} exact>
              <RequestForm currentUser={currentUser} />
            </Route>
            <Route path={`/client/:userId/requests/:requestId/offers`} exact>
              <OfferList currentUser={currentUser} />
            </Route>

            {/* <Route path="/provider_dashboard"></Route> */}

            {/* for provider */}
            <Route path="/provider/:userId">
              <ProviderDashboard currentUser={currentUser} />
            </Route>
            {/* temp */}
            <Route path="/client/:userId">
              <UserDashboard currentUser={currentUser} />
            </Route>
            {/* temp */}
            <Route path="/new_listings">
              <NewJobList currentUser={currentUser} />
            </Route>
            <Route path="/assigned_jobs">
              <AssignedJobList currentUser={currentUser} />
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
