export default function Dashboard({currentUserDetails: currentUser}){
  return (
    <>
    {currentUser && currentUser.is_provider &&
      //TBD ::Display Provider Dashboard
      <div>
        <p>{currentUser.id}</p>
        <p>{currentUser.first_name}</p>
      </div>
    }
    {currentUser && !currentUser.is_provider &&
    //TBD:: Display Client Dashboard
      <div>
        <p>{currentUser.id}</p>
        <p>{currentUser.first_name}</p>
      </div>
    }
    </>
  );
};