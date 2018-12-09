import React from 'react';

function BagShowSection({ bag }) {
  return (
    <div className="column is-7-desktop is-offset-3-desktop  pic is-three-quarters-mobile">
      <figure className="image">
        <img  src={ bag.image } />
      </figure>
      <div className="column">
        <p className="has-text-right name">{bag.name}</p>
        <p className="has-text-right brand">{bag.brand}</p>
        <p className="has-text-right price"> {bag.unitPrice} GBP</p>
        <hr/>
        <p className="has-text-left description">{bag.description}</p>
        <p className="has-text-left detail">{bag.detail}</p>
      </div>
    </div>
  );
}

export default BagShowSection;
