import React from 'react';
import axios from 'axios';
import moment from 'moment';
import { getToken } from '../../lib/auth';

class AllPurchases extends React.Component {
  constructor(props) {
    console.log('this is purchase history');
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const token = getToken();
    console.log(token);
    axios.get('/api/allpurchases', {headers: {
      Authorization: `Bearer ${getToken()}`}})
      .then(result => this.setState({ purchases: result.data }));

  }
  render() {
    console.log(this.state.purchases);
    // const purchases = this.state.purchases;
    return(
      <main>
        <div className="section is-small">
          <section className="hero">
            <h2 className='title is-2 has-text-centered'>All Order History</h2>
            <hr />
            <div className="hero-body">

          
              {
                this.state.purchases && this.state.purchases.map(purchase =>
                  <div key={purchase._id} className="columns is-mobile">
                    <div className="column is-2">
                      <figure  className="image">
                        <img id="sold-pic" src={ purchase.bag.image} />
                      </figure>
                    </div>
                    <div className="column is-1">
                      <p className="has-text-centered">{purchase.user.username}</p>
                    </div>
                    <div className="column is-2">
                      <p className="has-text-centered">{purchase.bag.name}</p>
                    </div>
                    <div className="column is-2">
                      <p className="has-text-centered">£ {purchase.unitPrice}</p>
                    </div>
                    <div className="column is-1">
                      <p className="has-text-centered">{purchase.unitQuantity}</p>
                    </div>
                    <div className="column is-2">
                      <p className="has-text-centered">Total £{purchase.totalPrice}</p>
                    </div>
                    <div className="column is-2">
                      <p className="has-text-centered">{moment(purchase.createdAt).fromNow()}</p>
                    </div>
                  </div>
                )
              }
            </div>
          </section>
        </div>
      </main>
    );
  }
}

export default AllPurchases;
