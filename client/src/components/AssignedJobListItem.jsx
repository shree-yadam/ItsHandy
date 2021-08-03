import axios from "axios";
import RequestItemInfo from "./RequestItemInfo";
import Button from "./Button";

export default function AssignedJobListItem({
  currentUser,
  id,
  title,
  description,
  category,
  date,
  markJobCompleted
}) {

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
        title={title}
        description={description}
        category={category}
        date={date}
      />
      <Button onClick={handleMarkCompleted}>MarkCompleted</Button>
    </div>
  )
}