import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Button from './Button';
import './NavBar.scss';

export default function NavBar ({currentUser, setCurrentUser}){

  const history = useHistory();
  function handleLogout(event) {
    console.log("Logout");
    axios.post('api/users/logout')
    .then(() => {
      setCurrentUser(null);
      history.push("/");
    })
    .catch((err) => console.log("Error: ", err));
  }

return (

<nav className = "navbar-menu">
      {!currentUser &&
        <div className = "navbar-items-container">
          <span>
            <Button className="navbar-items" onClick={()=> history.push("/")}>Home</Button>
          </span>
          <span>
            <Button className="navbar-items" onClick={()=> history.push("/login")}>Login</Button>
            <Button className="navbar-items" onClick={()=> history.push("/register")}>Register</Button>
          </span>
        </div>
      }
      {
        currentUser &&
        <div className = "navbar-items-container">
          <span>
            <Button className="navbar-items" onClick={()=> history.push("/")}>Home</Button>
          </span>
          <span>
            <label>
              {currentUser.first_name} {currentUser.last_name}
              <Button className="navbar-items" onClick={handleLogout}>Logout</Button>
            </label>
          </span>
        </div>
      }
</nav>

)

}
