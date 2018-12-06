import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BagShowSection from './BagShowSection';
import { addItem } from '../../lib/basket';
import { isAdmin } from '../../lib/auth';




export default class BagShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleDelete = this.handleDelete.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    axios.get(`/api/bags/${this.props.match.params.id}`)
      .then(res => {
        this.setState({bag: res.data});
        console.log('this.state bag show', this.state);
      });
  }
  handleDelete(event){
    event.preventDefault();
    axios.delete(`/api/bags/${this.state.bag._id}`)
      .then( () => this.props.history.push('/bags'));
  }

  handleClick() {
    // console.log(quantity);
    addItem(this.state.bag, parseInt(this.state.quantity));
    this.props.history.push('/basket');
  }

  handleChange({ target: {name, value }}) {
    console.log('this is name', { [name]: value });
    this.setState({ [name]: value });
  }

  render() {
    const bag = this.state.bag;
    return (
      <section>
        {bag
          ?
          <div className="columns">
            <BagShowSection bag={bag} />
          </div>
          :
          <p>Please wait...</p>}
        <div className="columns">
          <div className="field column is-8">
            <label htmlFor="quantity" className="label">Quantity</label>
            <input className="input" type="number" max='10' min='1' name="quantity"
              value={this.state.quantity || 0} onChange={this.handleChange}/>
          </div>
          <div className="column is-5 is-offset-1">
            <button className="button" onClick={this.handleClick}>Add to basket</button>
          </div>
        </div>
        <div>
          { isAdmin() && <button className="button is-dark has-text-centered deletebtn" onClick={this.handleDelete} >Delete</button>}
          { isAdmin() &&  <Link to={`/bags/${this.props.match.params.id}/edit`}>
            <button className="button is-light has-text-centered edit">Edit</button>
          </Link>}
        </div>
      </section>
    );
  }
}
