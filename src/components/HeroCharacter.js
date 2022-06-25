import React, { useState } from 'react';
// import './App.css';

function HeroCharacter() {
  const [character, setCharacter] = useState('');

  const getCharacter = () => {
    let randomNumb = Math.floor(Math.random() * 20);
    fetch('https://rickandmortyapi.com/api/character')
      .then((res) => res.json())
      .then((data) => setCharacter(data.results[randomNumb]));
  };

  const statusStyle = {
    color: 'white',
  };

  if (character.status === 'Dead') {
    statusStyle.color = 'red';
  } else if (character.status === 'Alive') {
    statusStyle.color = '#a4ca51';
  }

  return (
    <div className='Main-Character'>
      <div className='character-container'>
        <img src={character.image} alt={character.name} />
        <h1 className='characters'>{character.name}</h1>

        {character.status ? (
          <div className='character-info'>
            <ul>
              <li>
                <span style={statusStyle}>{character.status}</span>
              </li>
              <li>{character.species}</li>
              <li>{character.gender}</li>
              <li>{character.origin.name}</li>
              <li>{character.location.name}</li>
              <li>{character.created}</li>
            </ul>
          </div>
        ) : (
          <h1 className='characters'>
            Click the button below to generate a Rick and Morty character!
          </h1>
        )}
      </div>
      <div className='get-character'>
        <button className='btn' onClick={getCharacter}>
          Get New Character!
        </button>
      </div>
    </div>
  );
}

export default HeroCharacter;

// import React, { useState, useMemo } from 'react';
// import useCharacters from '../hooks/useCharacters';

// function HeroCharacter() {
//   const [search, setSearch] = useState('');
//   //   const searchRef = useRef(search);

//   const characters = useCharacters(
//     'https://rickandmortyapi.com/api/character/'
//   );

//   // useMemo is used to avoid unnecessary re-renders
//   const filteredCharacters = useMemo(() => {
//     return characters.filter((character) =>
//       character.name.toLowerCase().includes(search.toLowerCase())
//     );
//   }, [characters, search]);
//   // Next step is to replace filteredCharacters into characters map

//   return (
//     <div className='Hero-Character'>
//       <div className='Container'>
//         {filteredCharacters.map((character) => {
//           return (
//             <div className='Characters-Container' key={character.id}>
//               <img src={character.image} alt={character.name} />
//               <h2>{character.name}</h2>
//               <ul>
//                 <li>{character.status}</li>
//                 <li>{character.species}</li>
//                 <li>{character.gender}</li>
//                 <li>{character.origin.name}</li>
//               </ul>
//               <button>Read More</button>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default HeroCharacter;
