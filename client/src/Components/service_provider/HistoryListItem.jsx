import StarRatings from 'react-star-ratings';
import './HistoryListItem.scss'

export default function HistoryListItem({
  job
  }) {


  return (
    <div className="history-container">
      <div className ="historylisting-info">
      <h2> <strong>{job.title}</strong></h2>
      <div className="job-dates">
      <p><strong>Date needed:</strong> {job.preferred_date && job.preferred_date.split('T')[0]}</p>
      <p><strong>Date completed:</strong> {job.date_completed && job.date_completed.split('T')[0]}</p>
      </div>
      

       
          <p><strong>Description:</strong> {job.description}</p>
          </div>
          <div className = "star-ratings-completed">
          <strong>Review given:</strong><br></br><StarRatings rating={job.review || 0} starRatedColor="green"
          numberOfStars={5}/>

          {/* <Button className="msg-btn" variant="primary" type="submit"  onClick={checkMessages}>
            Messages
          </Button> */}
        </div>


    </div>
  );
}