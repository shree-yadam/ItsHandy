import { useEffect, useState } from "react";
import axios from "axios";
import NewJobListItem from "./NewJobListItem";

export default function NewJobList({currentUser}) {
  const [newJobs, setNewJobs] = useState(null);
  useEffect(()=>{
    console.log("HRE!!!!")
    console.log(newJobs);
    axios.get(`api/provider/${currentUser.id}/newListings`)
    .then((data) => console.log(data))
    .catch((err) => console.log("Error: ", err));
  },[newJobs, currentUser]);
  return(
    <div>
      {/* {currentUser && currentUser.is_provider && newJobs &&
        newJobs.map((newJob) =>
        <NewJobListItem
        title={newJob.title}
        description={newJob.description}
        preferred_date={newJob.preferred_date}
        category={newJob.category}
        />)
      } */}
    </div>
  );
}