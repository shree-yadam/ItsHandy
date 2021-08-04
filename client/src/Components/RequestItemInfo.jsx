export default function RequestItemInfo({
  title,
  description,
  category,
  date
}) {
  return (
    <div>
      <div>
      <h2>Title: <strong>{title}</strong></h2>
      <p>Description: {description}</p>
      <p>Category: {category}</p>
      <p>Date needed: {date && date.split('T')[0]}</p>
      </div>
    </div>
  );
}