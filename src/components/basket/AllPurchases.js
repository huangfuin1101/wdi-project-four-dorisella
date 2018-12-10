import React from 'react';
import axios from 'axios';
import moment from 'moment';
import { getToken } from '../../lib/auth';
import { Link } from 'react-router-dom';

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
            <h2 className='title is-3 has-text-centered order-title'>ALL ORDER HISTORY</h2>
            <hr />
            <div className="columns is-mobile">
              <div className="column is-1">
                <h5 className="has-text-centered has-text-weight-bold font">CUSTOMER</h5>
              </div>
              <div className="column is-2">
                <h5 className="has-text-centered has-text-weight-bold font">PRODUCT</h5>
              </div>
              <div className="column is-2">
                <h5 className="has-text-centered has-text-weight-bold font">DESCRIPTION</h5>
              </div>
              <div className="column is-1">
                <h5 className="has-text-centered has-text-weight-bold font">AMOUNT</h5>
              </div>
              <div className="column is-1">
                <h5 className="has-text-centered has-text-weight-bold font">UNIT</h5>
              </div>
              <div className="column is-2">
                <h5 className="has-text-centered has-text-weight-bold font">SUBTOTAL</h5>
              </div>
              <div className="column is-2">
                <h5 className="has-text-centered has-text-weight-bold font">GROSS PROFIT</h5>
              </div>
              <div className="column is-2">
                <h5 className="has-text-centered has-text-weight-bold font">TIME OF ORDER</h5>
              </div>
            </div>

            <div className="hero-body">
              {
                this.state.purchases && this.state.purchases.map(purchase =>
                  <div key={purchase._id} className="columns is-mobile">
                    <div className="column is-1">
                      <p className="has-text-left">{purchase.user.username}</p>
                    </div>
                    <div className="column is-2">
                      <Link to={`/bags/${purchase.bag._id}`}>
                        <figure  className="image">
                          <img id="sold-pic" src={ purchase.bag.image} />
                        </figure>
                      </Link>
                    </div>
                    <div className="column is-2">
                      <p className="has-text-centered">{purchase.bag.name}</p>
                    </div>
                    <div className="column is-1">
                      <p className="has-text-centered">£ {purchase.retailPrice}</p>
                    </div>
                    <div className="column is-1">
                      <p className="has-text-centered">{purchase.unitQuantity}</p>
                    </div>
                    <div className="column is-2">
                      <p className="has-text-centered"> £ {purchase.totalPrice}</p>
                    </div>
                    <div className="column is-2">
                      <p className="has-text-centered"> £ {purchase.grossProfit}</p>
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
