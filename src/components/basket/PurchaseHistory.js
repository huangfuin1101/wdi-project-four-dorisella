import React from 'react';
import axios from 'axios';
import moment from 'moment';
import { getToken } from '../../lib/auth';

class PurchaseHistory extends React.Component {
  constructor(props) {
    console.log('this is purchase history');
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const token = getToken();
    console.log(token);
    axios.get('/api/purchases', {headers: {
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
            <h2 className='title is-2 has-text-centered'>Order History</h2>
            <hr />
            <div className="hero-body">
              {
                this.state.purchases && this.state.purchases.map(purchase =>
                  <div key={purchase._id} className="columns is-mobile">
                    <div className="column is-2">
                      <figure  id="history-pic" className="image">
                        <img  src={ purchase.bag.image} />
                      </figure>
                    </div>
                    <div className="column is-2">
                      {/* <h5 className="subtitle is-5 has-text-centered has-text-weight-bold">ITEM</h5> */}
                      <p className="has-text-centered">{purchase.bag.name}</p>
                    </div>
                    <div className="column is-2">
                      {/* <h5 className="subtitle is-6 has-text-centered has-text-weight-bold">PRICER</h5> */}
                      <p className="has-text-centered">£ {purchase.unitPrice}</p>
                    </div>
                    <div className="column is-2">
                      {/* <h5 className="subtitle is-6 has-text-centered has-text-weight-bold">QUANTITY</h5> */}
                      <p className="has-text-centered">{purchase.unitQuantity}</p>
                    </div>
                    <div className="column is-2">
                      {/* <h5 className="subtitle is-6 has-text-centered has-text-weight-bold">SUBTOTAL</h5> */}
                      <p className="has-text-centered">Total £{purchase.totalPrice}</p>
                    </div>
                    <div className="column is-2">
                      {/* <h5 className="subtitle is-6 has-text-centered has-text-weight-bold">TIME OF ORDER</h5> */}
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

export default PurchaseHistory;
