import React from 'react';



function BagShowSection({ bag }) {
  return (
    <div className="column is-6 is-offset-3 pic">
      <figure className="image">
        <img  src={ bag.image } />
      </figure>
      <div>
        <h3 className="subtitle is-4 has-text-centered">{bag.name}</h3>
        <p className="has-text-centered">£ {bag.price}</p>
        <hr/>
        <p className="subtitle is-6">{bag.description}</p>
        <p className="subtitle is-6">{bag.detail}</p>
      </div>
    </div>
  );
}

export default BagShowSection;
