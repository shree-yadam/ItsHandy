import "./App.css";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import NavBar from "./components/NavBar";
import RequestListItem from "./components/RequestListItem";
import Dashboard from "./components/Dashboard";
import RequestForm from "./components/RequestForm";
import NewJobList from "./components/NewJobList";
import AssignedJobList from "./components/AssignedJobsList";
import JobDetails from "./components/JobDetails";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <Router>
      <div className="App">

        <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser}></NavBar>
        <Switch>
          <Route path="/" exact>
            {/* <Home /> */}
          </Route>

          <Route path="/login">
            <Login currentUser={currentUser} setCurrentUser={setCurrentUser} />
          </Route>

          <Route path="/register">
            <Register
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
            />
          </Route>

          <Route exact path="/requests">
            <RequestListItem />
          </Route>

          <Route exact path="/requests/new">
            <RequestForm />
          </Route>

          <Route path="/dashboard">
            <Dashboard currentUser={currentUser} />
          </Route>

          <Route path="/new_listings">
            <NewJobList currentUser={currentUser} />
          </Route>

          <Route path="/assigned_jobs">
            <AssignedJobList currentUser={currentUser} />
          </Route>

          <Route path="/new_listing_detail">
            <JobDetails currentUser={currentUser}/>
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
