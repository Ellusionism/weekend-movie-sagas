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
  }) // Sends a dispatch to Sagas with the id of the selected movie
  }, [])
  const details = useSelector(store => store.details);
  // Gets the details of the selected movie
  const history = useHistory();

  const genres = () => {
    details.genres.map((genre) => {
      return genre
    })
  };

  return (
    <>
      <div className="detailsGrid">
        <img src = {`${details.poster}`} alt = {`${details.title} Movie Poster`} />
        <div>
          <h2>{`${details.title}`}</h2>
          <p>{`${details.description}`}</p>
          <h3>Genres:</h3>
          {details.genres?.map((genre) => {
          return <p className="genre">{genre}</p>
          })}
          <br/>
          <button onClick = {() => history.push("/")}>Return to List</button>
        </div>
      </div>
    </>
  )// Button returns user to previous page
}

export default Details;