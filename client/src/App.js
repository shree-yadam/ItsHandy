import "./App.css";
import React, { useContext, createContext } from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import NavBar from "./components/NavBar";
import ProviderDashboard from "./components/ProviderDashboard";
import RequestList from "./components/RequestList";

function App() {
  //const [user, setUser] = createContext();
  // const [currentUserDetails, setCurrentUSerDetails] = set
  // const currentUser =useContext(null);
  const currentUser = {
    id: 1,
    first_name: "Joe",
    last_name: "Smith",
    email: "joe@smith.com",
  };

  return (
    <div className="App">
      <Router>
        <NavBar currentUser={currentUser} />

        <main>
          <Switch>
            <Route path="/" exact>
              {/* <Home /> */}
            </Route>
            <Route path="/login">
              <Login currentUser={currentUser} />
            </Route>

            <Route path="/register">
              <Register currentUser={currentUser} />
            </Route>

            <Route path="/requests" currentUser={currentUser}>
              <RequestList />
            </Route>

            <Route path="/dashboard" currentUser={currentUser}>
            </Route>
        </Switch>
          </main>
      </Router>
    </div >
  );
}

export default App;
