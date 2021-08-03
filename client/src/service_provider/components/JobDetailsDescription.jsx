export default function JobDetailsDescription({title,
  description,
  category,
  date,
  img_url}) {
  return (
    <div>
      <h4>Title: {title}</h4>
        <h6>Description: {description}</h6>
        <div>
          <p>Category: {category}</p>
          <p>Preferred Date:  {date && date.split('T')[0]}</p>
        </div>
        <div>
          <img src={img_url} alt="job details" />
        </div>
      </div>
  );
}