import "./JobDetails.scss";

export default function JobDetailsDescription({
  title,
  description,
  category,
  street_address,
  city,
  date,
  img_url,
}) {
  console.log("Category !!", category);
  return (
    <div className="job-details-text">
      <h4>
        <strong>Title: {title}</strong>
      </h4>
      <h6>Description: {description}</h6>

      <p>Category: {category}</p>
      <p> Address: {street_address + ", " + city}</p>
      <p>Preferred Date: {date && date.split("T")[0]}</p>
      {img_url && (
        <img className="job-detail-img" src={img_url} alt="job details" />
      )}
    </div>
  );
}
