export default function Dashboard({currentUserDetails}){
  return (
    <>
    {currentUserDetails && currentUserDetails.is_provider &&
      //TBD ::Display Provider Dashboard
      <div>
        <p>{currentUserDetails.id}</p>
        <p>{currentUserDetails.first_name}</p>
      </div>
    }
    {currentUserDetails && !currentUserDetails.is_provider &&
    //TBD:: Display Client Dashboard
      <div>
        <p>{currentUserDetails.id}</p>
        <p>{currentUserDetails.first_name}</p>
      </div>
    }
    </>
  );
};