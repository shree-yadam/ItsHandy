import { useEffect, useState } from "react";
import axios from "axios";
import NewJobListItem from "./NewJobListItem";
import useVisualMode from "../Hooks/useVisualMode";
import JobDetails from "./JobDetails";
import  "./NewJobList.scss";

const DETAIL = "DETAIL";
const JOB_LIST = "JOB_LIST";


export default function NewJobList({currentUser}) {
  const { mode, transition } = useVisualMode(JOB_LIST);
  const [detailJobId, setDetailJobId] = useState(null);

  const [newJobs, setNewJobs] = useState(null);
  useEffect(() => {
      if(currentUser) {
        axios.get(`api/providers/${currentUser.id}/newListings`)
        .then((res) => {
          console.log(res.data);
          setNewJobs(res.data);
          const jobs = newJobs;
          jobs.map(job => {
            job.offer_made = false;
            job.quote = "";
            job.comment = "";
            return job;
          });
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
        {newJobs &&
          newJobs.map((newJob, index) =>
          <NewJobListItem
          key={newJob.id}
          job={newJob}
          currentUser={currentUser}
          setDetailJobId={setDetailJobId}
          setMode={transition}
          index={index}
          setNewJobs={setNewJobs}
          />)
        }
        </>
      }
      {mode === DETAIL &&
        <JobDetails currentUser={currentUser}
        job={newJobs[detailJobId]}
        setMode={transition}
        setNewJobs={setNewJobs}
        index={detailJobId} />
      }
    </div>
  );
}