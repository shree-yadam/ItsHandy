import React from 'react';
import NewJobList from './NewJobList';
import { useHistory } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import './home.scss'



export default function Home(currentUser) {
const history = useHistory()
return (
  <div className = "main-container">
<div className = 'about'>
<h1>About Us</h1>

<h2> ItsHandy is a modern day app </h2>
  <p> To help you find service providers such as plumbers, electricians, painters etc</p>

</div>

<div className = "info">
<div className = "new-jobs">
<NewJobList ></NewJobList>
</div>



<div className = "request-job-btn">
<Button onClick={()=> history.push('/requests/new')}> Request Form </Button>
</div>

</div>




</div>




)


}