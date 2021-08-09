import axios from "axios";
import RequestItemInfo from "./RequestItemInfo";
import Button from 'react-bootstrap/Button';

export default function AssignedJobListItem({
  currentUser,
  id,
  job,
  category,
  markJobCompleted
}) {

  console.log(job);

  function handleMarkCompleted(){
   console.log("Marking Completed");
   const date = Date.now();
    axios.put(`api/providers/${currentUser.id}/assignedJobs/${id}/update`, {date})
    .then((res) => {
      //set assigned jobs to new list
      markJobCompleted(id);
    })
    .catch((err) => console.log("Error: ", err));

  }

  return (
    <div>
      <RequestItemInfo
        title={job.title}
        description={job.description}
        category={category}
        date={job.preferred_date}
        street_address={job.street_address}
        city={job.city}
      />
      <Button onClick={handleMarkCompleted}>MarkCompleted</Button>
    </div>
  )
}