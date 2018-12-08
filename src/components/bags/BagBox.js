import React from 'react';
import { Link } from 'react-router-dom';

function BagBox ({ bag }){
  console.log('this is bag._id', bag._id);
  return (
    <div className="column is-4">
      <Link to={`/bags/${bag._id}`}>
        <figure className="image index-img">
          <img  src={ bag.image} />
        </figure>
        <p className="has-text-centered">{ bag.name }</p>
        <p className="has-text-centered">{ bag.brand }</p>
        <p className="has-text-centered">£ { bag.unitPrice }</p>
      </Link>
    </div>
  );
}



export default BagBox;
