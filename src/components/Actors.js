import React from 'react';
import { actors } from '../data';

const Actors = () => {

  const actorsPage = actors.map((actor, index) => (
    <div key={index}>
      Name: {actor.name}
      <p>Movies:</p>
        <ul>
          {actor.movies.map((movie, index) => (
            <li key={index}>{movie}</li>
          ))}
        </ul>
    </div>
  ))

  return (
    <div>
     <h1> Actors Page</h1>
      {actorsPage}
    </div>
  );
}

export default Actors;
