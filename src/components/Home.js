import React from 'react';
import { Link } from 'react-router-dom';

function Home(){
  return (
    <section className="section">
      <div className="columns is-12-desktop is-12-mobile">
        <Link to={'/bags'}>
          <figure  className="image">
            <img id="homepic"  src="../../scss/images/home.png" />
          </figure>
        </Link>
      </div>
    </section>
  );
}

export default Home;
