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
import RequestForm from "./components/user/RequestForm";
import NewJobList from "./components/service_provider/NewJobList";
import AssignedJobList from "./components/service_provider/AssignedJobsList";
import JobDetails from "./components/service_provider/JobDetails";
import NoMatch from "./components/NoMatch";
import OfferList from "./components/user/OfferList";

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
              <RequestList currentUser={currentUser} />
            </Route>

            {/* Route for creating new requests by logged in user */}
            <Route path={`/client/:userId/requests/new`} exact>
              <RequestForm currentUser={currentUser} />
            </Route>

            <Route path={`/client/:userId/requests/:requestId/offers`} exact>
              <OfferList currentUser={currentUser} />
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
