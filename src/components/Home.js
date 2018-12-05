import React from 'react';
import { Link } from 'react-router-dom';

function Home(){
  return (
    <div className="hero has-text-centered">
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column is-8 is-offset-2 home">
              <Link to={'/bags'}>
                <h1 id="title" className="title is-1">DORISELLA</h1>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
