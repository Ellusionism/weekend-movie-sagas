import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import './Details.css';

function Details() {

  const dispatch = useDispatch();

  let { id } = useParams(); 

  useEffect(() => {
    dispatch({
      type: 'FETCH_DETAILS',
      payload: id
  })
  }, [])
  const details = useSelector(store => store.details);
  const history = useHistory();

  return (
    <>
      <button onClick = {() => history.push("/")}>Return to List</button>
      <div className="detailsGrid">
        <img src = {`${details.poster}`} alt = {`${details.title} Movie Poster`} />
        <div>
          <h2>{`${details.title}`}</h2>
          <p>{`${details.description}`}</p>
        </div>
      </div>
    </>
  )
}

export default Details;