import React from 'react';
import { Link } from 'react-router-dom';

function Home(){
  return (
    <div className="section">
      <Link to={'/bags'}>
        <figure  className="image">
          <img id="homepic"  src="../../scss/images/home.png" />
        </figure>
      </Link>
    </div>
  );
}

export default Home;
