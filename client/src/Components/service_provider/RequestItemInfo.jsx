import './AssignedJobList.scss';
import './RequestItemInfo.scss'
export default function RequestItemInfo({
  title,
  description,
  category,
  date,
  street_address,
  city,
}) {
  console.log(category, date);
  return (
    <div>
      <div className="req-assigned-jobs-box">
      <h2> <strong>{title}</strong></h2>
      <p><strong>Description: </strong>{description}</p>
      <p>
        <strong>Location: </strong>
        {street_address}, {city}
      </p>
      <p><strong>Category: </strong>{category}</p>
      <p><strong>Date needed:</strong> {date && date.split('T')[0]}</p>
      </div>
    </div>
  );
}
