import React from 'react';
import basketLib from '../../lib/basket';
import { handleChange } from '../../lib/common';
import { Link } from 'react-router-dom';



class Basket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      outOfStock: []
    };
    this.checkout = basketLib.checkout.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleChange = handleChange.bind(this);
    this.handleDecreasesClick = this.handleDecreaseClick.bind(this);
    this.handleIncreaseClick = this.handleIncreaseClick.bind(this);
  }

  componentDidMount() {
    this.setState({ basket: basketLib.getBasket()});
  }

  handleDelete(itemId) {
    basketLib.removeItem(itemId);
    this.setState({ basket: basketLib.getBasket()});
  }

  handleIncreaseClick(item) {
    basketLib.increaseQuantity(basketLib.getBasket(), item._id, 1);
    this.setState({ basket: basketLib.getBasket() });
    basketLib.totalBasketPrice();
  }

  handleDecreaseClick(item) {
    basketLib.decreaseQuantity(basketLib.getBasket(), item._id, 1);
    this.setState({ basket: basketLib.getBasket() });
  }



  render() {
    console.log('this is basket', this.state.basket);
    const basket = this.state.basket;
    const hasItems = basket && !!basket.length;
    console.log('this.state.outOfStock', this.state.outOfStock);
    return (
      <main>
        <div className="section is-small">
          <section className="hero">
            <h2 className='title is-2 has-text-left'>SHOPPING BASKET</h2>
            <hr />
            <div className="hero-body">
              <div className="container has-text-centered">
                {basket && hasItems ? basket.map(item =>
                  <div key={item._id} className="columns is-mobile">
                    <div className="column is-2">
                      <Link to={`/bags/${item._id}`}>
                        <figure id="pics" className="image">
                          <img  src={ item.image} />
                        </figure>
                      </Link>
                    </div>
                    <div className="column is-2 has-text-left">
                      <p>{item.name}</p>
                    </div>
                    <div className="column is-3">
                      <span onClick={() => this.handleDecreaseClick(item)}><strong> ＜ </strong></span>
                      <span>{item.unitQuantity}</span>
                      <span onClick={() => this.handleIncreaseClick(item)}> <strong>＞</strong></span>
                    </div>
                    <div className="column is-2">
                      <p>£{item.retailPrice}</p>
                    </div>
                    <div className="column is-1">
                      <a className="delete" onClick={() => this.handleDelete(item._id)}></a>
                    </div>
                    <div className="column is-2 has-text-centered">
                      {this.state.outOfStock.includes(item._id) && <p>Out of stock</p>}
                    </div>
                  </div>
                ):
                  <p>No items</p>}
                <hr />
                {basket && hasItems &&
                  <div className="columns is-mobile">
                    <div className="column">
                      <p className="column is-offset-10">Total Price: £ {basketLib.totalBasketPrice()}</p>
                    </div>
                  </div>
                }
                <div className="columns">
                  <div className="column is-4">
                    <Link to={'/bags'}>
                      <button className="button continue" >Continue Shopping</button>
                    </Link>
                  </div>
                  <div className="column is-8">
                    <button className="button is-dark is-offset-4 checkout" onClick={this.checkout}>Check out</button>
                    <button className="button is-light is-offset-2 clear" onClick={() => this.setState({ basket: basketLib.createBasket() })}>Clear basket</button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    );
  }
}

export default Basket;
