import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function CardDetails() {
  let { id } = useParams();

  let [fetchedData, updateFetchedData] = useState([]);
  let { name, location, origin, gender, image, status, species, created } =
    fetchedData;

  let api = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);
  return (
    <StyledCardDetails>
      <div className='Card-Container'>
        <div className='Left-Details'>
          <img src={image} alt={name} />
        </div>

        <div className='Right-Details'>
          <h1>{name}</h1>
          <div className='Card-Details'>
            <div className='Detail-Item'>
              <span>Status : </span>
              {status}
            </div>
            <div className='Detail-Item'>
              <span>Gender : </span>
              {gender}
            </div>
            <div className='Detail-Item'>
              <span>Location: </span>
              {location?.name}
            </div>
            <div className='Detail-Item'>
              <span>Origin: </span>
              {origin?.name}
            </div>
            <div className='Detail-Item'>
              <span>Species: </span>
              {species}
            </div>
            <div className='Detail-Item'>
              <span>Created: </span>
              {created}
            </div>
          </div>

          <div className='Back-Arrow'>
            <Link to='/characters'>
              <div>{<ArrowBackIosIcon />}</div>
            </Link>
          </div>
        </div>
      </div>
    </StyledCardDetails>
  );
}

export default CardDetails;

const StyledCardDetails = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .Card-Container {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    width: 700px;
    margin: 50px;
    border-radius: 30px;
    align-items: center;
    box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  }

  .Left-Details {
    display: flex;
    width: 40%;
    height: auto;
    img {
      width: 100%;
      object-fit: cover;
    }
  }

  .Right-Details {
    display: flex;
    width: 60%;
    height: auto;
    padding: 0 10px;
  }

  .Right-Details {
    flex-direction: column;
    justify-content: space-evenly;
    /* height: 300px; */

    h1 {
      padding: 20px 0;
      color: #354259;
      font-size: 24px;
      font-weight: 500;
      font-family: Nunito, sans-serif;
    }

    .Card-Details {
      color: var(--secondary-color);

      .Detail-Item {
        padding-bottom: 5px;
        span {
          color: var(--font-dark-color);
          padding-right: 5px;
        }
      }
    }

    .Back-Arrow {
      display: flex;
      justify-content: flex-end;
      padding-right: 20px;
      margin-top: 10px;
      cursor: pointer;
      .MuiSvgIcon-root {
        font-size: 30px;
        color: var(--font-dark-color);
        &:hover {
          color: var(--primary-color-light);
          transition: 0.3s;
        }
      }
    }
  }
`;
