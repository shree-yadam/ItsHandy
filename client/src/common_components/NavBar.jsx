import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
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
            <Button  className="navbar-items" onClick={()=> history.push("/")}>Home</Button>
          </span>
          <div className="user-action-nav">
            <Button variant="dark" className="navbar-items" onClick={()=> history.push("/login")}>Login</Button>
            <Button variant="success" className="navbar-items" onClick={()=> history.push("/register")}>Register</Button>
          </div>
        </div>
      }
      {
        currentUser &&
        <div className = "navbar-items-container">
          <span> 
            
            <Button variant="success" className="navbar-items" onClick={()=> history.push("/")}>Home</Button>
            {!currentUser.is_provider &&
            <Button onClick={()=> history.push('/requests/new')}> Request Form </Button>
            }
          </span>
          <div className="user-action-nav">
        
              {currentUser.first_name} {currentUser.last_name}
              <Button variant="danger" className="navbar-items" onClick={handleLogout}>Logout</Button>
            
          </div>
        </div>
      }
</nav>

)

}
