import { useEffect, useState } from "react";
import axios from "axios";
import AssignedJobListItem from "./AssignedJobListItem";
import './AssignedJobList.scss';
import { useHistory } from "react-router-dom";

export default function AssignedJobList({currentUser, categories}){

  const [assignedJobs, setAssignedJobs] = useState(null);
  const history = useHistory();
  useEffect(() => {
    // console.log(currentUser);
      //TBD: Temp fix for refresh issues
      if(!currentUser){
        history.push('/login');
        return;
      }
      if(currentUser) {
        axios.get(`/api/providers/${currentUser.id}/assignedJobs`)
        .then((res) => {
          setAssignedJobs(res.data);
        })
        .catch((err) => console.log("Error: ", err));
      }
      console.log(assignedJobs);
  },[]);

  function markJobCompleted(id) {
    const newAssignedJobs = assignedJobs.filter(job => job.id !== id);
    setAssignedJobs(newAssignedJobs);
  }

  return (
    <div className="assigned-jobs-container">
      {currentUser &&
      <h2>Assigned Jobs</h2>
      }
      {!assignedJobs && <h3>Loading...</h3>}
      {assignedJobs && assignedJobs.length === 0  && <h3>No Entries.</h3>}
      {assignedJobs && assignedJobs.map((assignedJob) => <AssignedJobListItem
      key={assignedJob.id}
      currentUser={currentUser}
      job={assignedJob}
      category={categories.find((category)=> category.id === assignedJob.category_id).name}
      markJobCompleted={markJobCompleted}
      />)}

    </div>
  );
}