import axios from 'axios';
import { NavLink, Link, Redirect, Router , useHistory} from 'react-router-dom';
import Button from './Button';

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
  <div className = "navbar-menu">
    <Link to="/" >Home</Link>

      {!currentUser &&
        <div>
          <Button onClick={()=> history.push("/login")}>Login</Button>
          <Button onClick={()=> history.push("/register")}>Register</Button>
        </div>
      }
      {
        currentUser &&
        <Button onClick={handleLogout}>Logout</Button>
      }
 </div>
</nav>

)

}
