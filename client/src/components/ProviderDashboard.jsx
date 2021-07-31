export default function ProviderDashboard({currentUserDetails}){
  return (
    <>
    <p>{currentUserDetails.id}</p>
    <p>{currentUserDetails.first_name}</p>
    {currentUserDetails.last_name}
    </>
  );
};