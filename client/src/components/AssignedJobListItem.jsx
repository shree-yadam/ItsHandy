import RequestItemInfo from "./RequestItemInfo";
import Button from "./Button";

export default function AssignedJobListItem({
  id,
  title,
  description,
  category,
  date
}) {

  function handleMarkCompleted(){
    /*TBD

    */

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