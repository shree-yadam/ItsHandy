import "./App.css";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Login  from "./components/Login";
import Register from "./components/Register"
import NavBar from "./components/NavBar";


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <main>
          <NavBar></NavBar>
            <Route path="/" exact>
              {/* <Home /> */}
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
          </main>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
