import { useEffect, useState } from "react";
import axios from "axios";
import AssignedJobListItem from "./AssignedJobListItem";
import './AssignedJobList.scss';

export default function AssignedJobList({currentUser}){

  const [assignedJobs, setAssignedJobs] = useState(null);
  useEffect(() => {
    console.log(currentUser);
      if(currentUser) {
        axios.get(`api/providers/${currentUser.id}/assignedJobs`)
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
      {assignedJobs && assignedJobs.map((assignedJob) => <AssignedJobListItem
      key={assignedJob.id}
      currentUser={currentUser}
      id={assignedJob.id}
      title={assignedJob.title}
      description={assignedJob.description}
      category={assignedJob.name}
      date={assignedJob.preferred_date}
      img_url={assignedJob.img_url}
      markJobCompleted={markJobCompleted}
      />)}

    </div>
  );
}