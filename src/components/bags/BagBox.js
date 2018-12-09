import React from 'react';
import { Link } from 'react-router-dom';

function BagBox ({ bag }){
  console.log('this is bag._id', bag._id);
  return (
    <div className="column is-4-desktop is-6-tablet is-12-mobile">
      <Link to={`/bags/${bag._id}`}>
        <figure className="image index-img">
          <img  src={ bag.image} />
        </figure>
        <div className="column is-multiline">
          <h6 className="bag-name">{ bag.name }</h6>
          <p className="bag-brand">{ bag.brand }</p>
          <p className="bag-price"> { bag.unitPrice } GBP</p>
        </div>
      </Link>
    </div>
  );
}



export default BagBox;
