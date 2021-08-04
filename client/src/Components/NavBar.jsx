import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './NavBar.scss';

export default function NavBar ({currentUser, setCurrentUser}){

  const history = useHistory();
  function handleLogout(event) {
    console.log("Logout");
    axios.post('/api/users/logout')
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
        currentUser  &&
        <div className = "navbar-items-container">
          <span className = "navbar-items-container">

            <Button variant="success" className="navbar-items" onClick={()=> history.push("/")}>Home</Button>
            {!currentUser.is_provider &&
            <div className="navbar-items-container">
            <Button onClick={()=> history.push(`/client/${currentUser.id}/requests/new`)}> Request Form </Button>
            <Button variant="success" className="navbar-items" onClick={()=> history.push(`/client/${currentUser.id}`)}>My Dashboard</Button>
            </div>
            }
             {currentUser.is_provider &&
            <div className="navbar-items-container">
            <Button variant="success" className="navbar-items" onClick={()=> history.push(`/provider/${currentUser.id}`)}>My Dashboard</Button>
            </div>
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
