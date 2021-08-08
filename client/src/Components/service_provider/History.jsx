import { useEffect, useState } from "react";
import axios from "axios";
import HistoryListItem from "./HistoryListItem";
import  "./NewJobList.scss";

export default function History({currentUser}) {
  const [oldJobs, setNewJobs] = useState(null);

  // Get new job listings matching provider category
  useEffect(() => {
      if(currentUser) {
        axios.get(`/api/providers/${currentUser.id}/jobsCompleted`)
        .then((res) => {
          const jobs = res.data;
          setNewJobs(jobs);

        })
        .catch((err) => console.log("Error: ", err));
      }
      // console.log(oldJobs);
  },[]);

  return(
    <div className="newlisting-main">
      <h2>Jobs Completed</h2>
      {!oldJobs && <h3>Loading...</h3>}
      {oldJobs && oldJobs.length === 0  && <h3>No Entries.</h3>}
        {oldJobs &&
          oldJobs.map((newJob) =>
          <HistoryListItem
          key={newJob.id}
          job={newJob}
          />)
        }
    </div>
  );
}