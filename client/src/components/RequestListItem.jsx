import Button from "./Button";


export default function RequestListItem() {


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
        <button> Request Service </button>
  
      <div className="listitem-container">
       
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
