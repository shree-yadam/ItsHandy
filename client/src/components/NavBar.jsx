import { NavLink, Link, Redirect, Router } from 'react-router-dom';
 
 
export default function NavBar (){
 
return (
 
<nav className = "navbar-menu">
<div className = "navbar-menu">
 <Link to="/" >Home</Link>
 
 <Link to="/login" >Login</Link>
 
 <Link to="/register" >Register</Link>
 </div>
</nav>
 
)
 
}
