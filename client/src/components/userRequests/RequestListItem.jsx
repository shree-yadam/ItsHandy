import RequestItemInfo from "../RequestItemInfo";
import Button from "../Button";
import { Link } from "react-router-dom";
import NavBar from "../NavBar";

export default function RequestListItem(props) {


  const deleteRequest = (event) => {
    event.preventDefault()
    console.log("DELETED REQUEST")


    // TBD
  };



  const sendMessage = (event) => {
    event.preventDefault()
    console.log("SENT MESSAGE")

    // TBD
  };

  return (
    <div>
      <NavBar></NavBar>
      <Link>
        {" "}
        <button> Request Service </button>{" "}
      </Link>
      <div className="listitem-container">
        <RequestItemInfo ></RequestItemInfo>
        <div classname="listitem-footer">
          <Button variant="primary" type="submit" onClick={deleteRequest}>
            Delete
          </Button>
          <Button>Review And Complete</Button>
          <Button variant="primary" type="submit" onClick={sendMessage}>Message</Button>
        </div>
      </div>
    </div>
  );
}
