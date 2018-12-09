import React from 'react';

function BagShowSection({ bag }) {
  return (
    <div className="column is-7-desktop is-offset-3-desktop  pic is-three-quarters-mobile">
      <figure className="image">
        <img  src={ bag.image } />
      </figure>
      <div>
        <h3 className="subtitle is-4 has-text-centered">{bag.name}</h3>
        <h6 className="subtitle is-6 has-text-centered">{bag.brand}</h6>
        <p className="has-text-centered">£ {bag.unitPrice}</p>
        <hr/>
        <p>{bag.description}</p>
        <p>{bag.detail}</p>
      </div>
    </div>
  );
}

export default BagShowSection;
