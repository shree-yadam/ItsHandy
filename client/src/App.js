import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// App components

import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import NavBar from "./Components/NavBar";
import RequestList from "./Components/user/RequestList";
import ProviderDashboard from "./Components/service_provider/ProviderDashboard";
import UserDashboard from "./Components/user/UserDashboard";
import RequestForm from "./Components/user/RequestForm";
import NewJobList from "./Components/service_provider/NewJobList";
import AssignedJobList from "./Components/service_provider/AssignedJobsList";
import NoMatch from "./Components/NoMatch";
import OfferList from "./Components/user/OfferList";
import History from "./Components/service_provider/History";
import CompletedRequestList from "./Components/user/CompletedRequestList";

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

            {/* Route for creating new requests by logged in user */}
            <Route path={`/client/:userId/requests/new`} exact>
              <RequestForm currentUser={currentUser} />
            </Route>

            <Route
              path={`/client/:userId/requests`}
              exact
              currentUser={currentUser}
            >
              <RequestList currentUser={currentUser} />
            </Route>



            <Route path={`/client/:userId/requests/:requestId/offers`} exact>
              <OfferList currentUser={currentUser} />
            </Route>

            <Route path={`/client/completed_requests`} exact>
              <CompletedRequestList currentUser={currentUser} />
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

            <Route path="/jobs_completed">
              <History currentUser={currentUser} />
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
