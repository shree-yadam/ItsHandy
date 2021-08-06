import { useEffect, useState } from "react";
import axios from "axios";
import NewJobListItem from "./NewJobListItem";
import useVisualMode from "../../hooks/useVisualMode";
import JobDetails from "./JobDetails";
import  "./NewJobList.scss";

const DETAIL = "DETAIL";
const JOB_LIST = "JOB_LIST";


export default function NewJobList({currentUser}) {
  const { mode, transition, back } = useVisualMode(JOB_LIST);
  const [detailJobId, setDetailJobId] = useState(null);
  const [newJobs, setNewJobs] = useState(null);

  // Get new job listings matching provider category
  useEffect(() => {
      if(currentUser) {
        axios.get(`/api/providers/${currentUser.id}/newListings`)
        .then((res) => {
          const jobs = res.data;
          setNewJobs(jobs);

        })
        .catch((err) => console.log("Error: ", err));
      }
      console.log(newJobs);
  },[]);

  return(
    <div className="newlisting-main">
      {mode === JOB_LIST &&
      <>
      <h2>New Job Listing</h2>
        {(!newJobs || newJobs.length === 0 ) && <h3>No Entries!</h3>}
        {newJobs &&
          newJobs.map((newJob, index) =>
          <NewJobListItem
          key={newJob.id}
          job={newJob}
          currentUser={currentUser}
          setDetailJobId={setDetailJobId}
          setMode={transition}
          back={back}
          index={index}
          setNewJobs={setNewJobs}
          />)
        }
        </>
      }
      {mode === DETAIL &&
        <JobDetails currentUser={currentUser}
        job={newJobs[detailJobId]}
        back={back}
        setNewJobs={setNewJobs}
        index={detailJobId} />
      }
    </div>
  );
}