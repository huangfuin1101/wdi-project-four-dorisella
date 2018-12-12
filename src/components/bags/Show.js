import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BagShowSection from './BagShowSection';
import { addItem } from '../../lib/basket';
import { isAdmin, isAuthenticated } from '../../lib/auth';
import { getToken } from '../../lib/auth';




export default class BagShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // bag: {}
    };
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
    axios.delete(`/api/bags/${this.state.bag._id}`, {headers: {
      Authorization: `Bearer ${getToken()}`
    }})
      .then( () => this.props.history.push('/bags'));
  }

  handleClick() {
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
      <section className="section">
        {bag
          ?
          <div className="columns is-mobile">
            <BagShowSection bag={bag} />
          </div>
          :
          <p>Please wait...</p>}

        { isAuthenticated() && <div className="columns is-mobile is-mutiline add">
          {bag
            ?
            <div className="column is-3 is-offset-3">
              { bag.stock > 0 &&  <input className="input" type="number" max='10' min='1' name="quantity"
                value={this.state.quantity || 0} onChange={this.handleChange}/> }
            </div>
            :
            <p>Please wait...</p>}

          {bag
            ?
            <div className="column is-6">
              { bag.stock <= 3 && bag.stock > 0 && <p className="hurry">Hurry! Only {bag.stock} in stock</p> }
              { bag.stock === 0 &&  <p className="hurry">Out of stock !!! </p> }

            </div>
            :
            <p>Please wait</p> }
          {bag
            ?
            <div className="column is-3">
              {  bag.stock > 0 && <button id="add-btn" className="button is-dark" onClick={this.handleClick}>Add</button> }
            </div>
            :
            <p>Please wait</p> }
        </div>}
        <div className="columns is-mobile is-12">
          { isAdmin() && <button className="button is-light has-text-centered deletebtn" onClick={this.handleDelete} >Delete</button>}
          { isAdmin() &&  <Link to={`/bags/${this.props.match.params.id}/edit`}>
            <button className="button is-dark has-text-centered edit">Edit</button>
          </Link>}
        </div>
      </section>
    );
  }
}
