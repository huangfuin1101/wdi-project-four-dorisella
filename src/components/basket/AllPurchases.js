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
        <div className="section is-large">
          <section className="hero">
            <h2 className='title is-3 has-text-centered order-title'>ALL ORDER HISTORY</h2>
            <hr />
            <div className="hero-body bag-order">
              <div className="columns is-mobile font">
                <div className="column is-1">
                  <h5 id="customer" className="has-text-centered has-text-weight-bold">CUSTOMER</h5>
                </div>
                <div className="column is-2">
                  <h5 id="product" className="has-text-centered has-text-weight-bold">PRODUCT</h5>
                </div>
                <div className="column is-2">
                  <h5 className="has-text-centered has-text-weight-bold">DESCRIPTION</h5>
                </div>
                <div className="column is-1">
                  <h5 className="has-text-centered has-text-weight-bold">AMOUNT</h5>
                </div>
                <div className="column is-1">
                  <h5 className="has-text-centered has-text-weight-bold unit">UNIT</h5>
                </div>
                <div className="column is-2">
                  <h5 className="has-text-centered has-text-weight-bold">SUBTOTAL</h5>
                </div>
                <div className="column is-1">
                  <h5 className="has-text-centered has-text-weight-bold">GROSS PROFIT</h5>
                </div>
                <div className="column is-1">
                  <h5 id="remain-stock"className="has-text-centered has-text-weight-bold">REMAINING STOCK</h5>
                </div>
                <div className="column is-2">
                  <h5 className="has-text-centered has-text-weight-bold">ORDER TIME</h5>
                </div>
              </div>
            </div>
            <div className="hero-body">
              {
                this.state.purchases && this.state.purchases.map(purchase =>
                  <div key={purchase._id} id="bottom-line" className="columns is-mobile">
                    <div className="column is-1">
                      <p className="has-text-left">{purchase.user.username}</p>
                    </div>
                    <div className="column is-2">
                      <Link to={`/bags/${purchase.bag._id}`}>
                        <figure  id="order-img" className="image ">
                          <img id="sold-pic" src={ purchase.bag.image} />
                        </figure>
                      </Link>
                    </div>
                    <div className="column is-2">
                      <p id="bag-name" className="has-text-left">{purchase.bag.name}</p>
                    </div>
                    <div className="column is-1">
                      <p className="has-text-centered">£ {purchase.retailPrice}</p>
                    </div>
                    <div className="column is-1">
                      <p className="has-text-centered unit">{purchase.unitQuantity}</p>
                    </div>
                    <div className="column is-2">
                      <p className="has-text-centered"> £ {purchase.totalPrice}</p>
                    </div>
                    <div className="column is-1">
                      <p className="has-text-centered"> £ {purchase.grossProfit}</p>
                    </div>
                    <div className="column is-1">
                      <Link to={`/bags/${purchase.bag._id}`}>
                        <p className="has-text-centered remain"> {purchase.bag.stock} </p>
                      </Link>
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
