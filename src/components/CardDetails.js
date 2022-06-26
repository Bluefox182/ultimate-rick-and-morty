import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import styled from 'styled-components';

function CardDetails() {
  let { id } = useParams();

  let [fetchedData, updateFetchedData] = useState([]);
  let { name, location, origin, gender, image, status, species } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);
  return (
    <div>
      <div>
        <div>
          <h1>{name}</h1>

          <img src={image} alt='' />
          {(() => {
            if (status === 'Dead') {
              return <div>{status}</div>;
            } else if (status === 'Alive') {
              return <div>{status}</div>;
            } else {
              return <div>{status}</div>;
            }
          })()}
          <div className='content'>
            <div className=''>
              <span>Gender : </span>
              {gender}
            </div>
            <div className=''>
              <span>Location: </span>
              {location?.name}
            </div>
            <div className=''>
              <span>Origin: </span>
              {origin?.name}
            </div>
            <div className=''>
              <span>Species: </span>
              {species}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDetails;
