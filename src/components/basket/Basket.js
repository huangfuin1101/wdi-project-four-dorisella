import React from 'react';
import basketLib from '../../lib/basket';
import { handleChange } from '../../lib/common';

class Basket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.checkout = basketLib.checkout.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleChange = handleChange.bind(this);
    this.handleEditSubmit = this.handleEditSubmit.bind(this);
    this.handleQuantityDoubleClick = this.handleQuantityDoubleClick.bind(this);
  }

  componentDidMount() {
    this.setState({ basket: basketLib.getBasket()});
  }

  handleDelete(itemId) {
    basketLib.removeItem(itemId);
    this.setState({ basket: basketLib.getBasket()});
  }

  handleEditSubmit(e) {
    e.preventDefault();
    basketLib.updateQuantity(this.state.editing, this.state.editQuantity);
    this.setState({ editing: null, editQuantity: null, basket: basketLib.getBasket() });
  }

  handleQuantityDoubleClick(item) {
    this.setState({
      editQuantity: item.quantity,
      editing: item._id});
  }

  render() {
    console.log('this is basket', this.state.basket);
    const basket = this.state.basket;
    const hasItems = basket && !!basket.length;

    return (
      <main>
        <h2 className='title is-2 has-text-centered'>Items in your basket</h2>
        <hr />
        {basket && hasItems ? basket.map(item =>
          <div key={item._id} className="columns">
            <div className="column is-3">
              <p>{item.name}</p>
            </div>
            <div className="column is-3" onDoubleClick={() => this.handleQuantityDoubleClick(item)}>
              {(this.state.editing === item._id) ?
                <form onSubmit={this.handleEditSubmit}>
                  <input className="input is-small is-primary" type="number" max='10' min='1' value={this.state.editQuantity || 0} name="editQuantity" onChange={this.handleChange} placeholder="quantity"/>
                </form>
                :
                <p>{item.quantity}</p>
              }
            </div>
            <div className="column is-3">
              <p>£ {item.price}</p>
            </div>
            <div className="column is-1">
              <a className="delete" onClick={() => this.handleDelete(item._id)}></a>
            </div>
          </div>
        ) : <p>No items</p>}
        {basket && hasItems &&
          <section className="columns">
            <div className="column">
              <button className="button is-light" onClick={() => this.setState({ basket: basketLib.createBasket() })}>Clear basket</button>
            </div>
            <div className="column">
              <p className="column">Total price: £ {basketLib.totalBasketPrice()}</p>
            </div>
            <div className="column">
              <button className="button is-dark" onClick={this.checkout}>Check out</button>
            </div>
          </section>
        }
      </main>
    );
  }
}

export default Basket;
