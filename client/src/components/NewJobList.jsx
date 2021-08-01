import { useEffect, useState } from "react";
import axios from "axios";
import NewJobListItem from "./NewJobListItem";

export default function NewJobList({currentUser}) {

  const [newJobs, setNewJobs] = useState(null);
  useEffect(() => {
      if(currentUser) {
        axios.get(`api/providers/${currentUser.id}/newListings`)
        .then((res) => {
          console.log(res.data);
          setNewJobs(res.data);})
        .catch((err) => console.log("Error: ", err));
      }
      console.log(newJobs);
  },[]);

  return(
    <div>
      <div>
        {newJobs &&
          newJobs.map((newJob) =>
          <NewJobListItem
          key={newJob.id}
          title={newJob.title}
          description={newJob.description}
          preferred_date={newJob.preferred_date}
          category={newJob.category}
          />)
        }
      </div>
    </div>
  );
}