import './AssignedJobList.scss';
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
      <div className="assigned-jobs-box">
      <h2> <strong>{title}</strong></h2>
      <p>Description: {description}</p>
      <p>
        <strong>Location: </strong>
        {street_address}, {city}
      </p>
      <p>Category: {category}</p>
      <p>Date needed: {date && date.split('T')[0]}</p>
      </div>
    </div>
  );
}
