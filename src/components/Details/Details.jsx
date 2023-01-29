import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

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
    <div>
      <img src = {`${details.poster}`} alt = {`${details.title} Movie Poster`} />
      <h2>{`${details.title}`}</h2>
      <p>{`${details.description}`}</p>
      <button onClick = {() => history.push("/")}>Return to List</button>
    </div>
    
  )
}

export default Details;