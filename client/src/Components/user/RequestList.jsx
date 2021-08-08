
import { useState } from "react";
import RequestListItem from "./RequestListItem";
import useRequestListData from "../../hooks/useRequestListData";
import './RequestList.scss';
import './RequestListItem.scss'
import useVisualMode from "../../hooks/useVisualMode";
import RequestEditForm from "./RequestEditForm";

/**
 * This component renders Requests List including offers to pass it down to offers component submitted by a specific customer through mapping and using RequstListItem component
 * No props are passed to this function yet (Should take array of requests)
 * @returns single request
 */
const LIST_MODE = "LIST_MODE"
const EDIT_MODE = "EDIT_MODE"
const RequestList = (props) => {
  const { mode, transition, back } = useVisualMode("LIST_MODE");
  const [editItemId, setEditItemId] = useState(null);
  // const [categories, setCategories] = useState();

  console.log(props);

  /**
   * Data Sample: List of objects like this
   *   {[
    id: 2,
    title: 'Broken Fan',
    street_address: '111 King Street East',
    city: 'Toronto',
    category_id: 2,
    preferred_date: null,
    preferred_time: null,
    img_url: 'https://c8.alamy.com/comp/WDF2GC/close-up-of-abandoned-floor-fan-WDF2GC.jpg',
    description: 'Fan not working. Blades are broken and need someone to replace',
    client_id: 1,
    provider_id: null,
    date_completed: null,
    longitude: null,
    latitude: null,
    price: null
  }]
  offers:[
      {
    id: 2,
    request_id: 2,
    provider_id: null,
    quote: '$200',
    offer_comment: 'can fix it but need tools to help',
    title: 'Paint Basement',
    street_address: '4350 Robson St',
    city: 'Vancouver',
    price: null,
    category_id: 3,
    preferred_date: 2021-08-16T04:00:00.000Z,
    preferred_time: null,
    img_url: null,
    description: 'Need the whole basement repainted',
    client_id: 1,
    date_completed: null,
    longitude: null,
    latitude: null
  }
  ]
   */
  const { requestListState, setRequestListState, assignOffer } = useRequestListData();

  //console.log('typeof assignOffer :>> RequestList ', typeof assignOffer);

  return (<div className="request-list">
    {mode === LIST_MODE &&
      <div>
        {/* This check is to not map if this was not loaded the first time */}

        {(!requestListState.requestList || requestListState.requestList.length === 0) && <h3>Loading...</h3>}
        {requestListState.requestList && requestListState.requestList.map((requestItem, index) => {
          let requestOffers = requestListState.offers && requestListState.offers.filter(offer => offer.request_id === requestItem.id)

          return (
            <RequestListItem key={requestItem.id} OffersRequests={{ requestItem: requestItem, requestOffers: requestOffers, assignOffer: assignOffer }}
              currentUser={props.currentUser} setRequestListState={setRequestListState} transition={transition} setEditItemId={setEditItemId} index={index} />
          )
        })
        }</div>
    }
    {mode === EDIT_MODE &&
      <RequestEditForm currentUser={props.currentUser} request={requestListState.requestList[editItemId]} setRequestListState={setRequestListState} index={editItemId} back={back} categories={props.categories}/>
    }
  </div>
  )
};

export default RequestList;
