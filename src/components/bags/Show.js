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
    axios.delete(`/api/bags/${this.state.bag._id}`, {headers: {
      Authorization: `Bearer ${getToken()}`
    }})
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
      <section className="section">
        {bag
          ?
          <div className="columns is-mobile">
            <BagShowSection bag={bag} />
          </div>
          :
          <p>Please wait...</p>}
        { isAuthenticated() && <div className="columns is-mobile">
          <div className="column is-3 is-offset-3">
            {/* <label htmlFor="quantity" className="label">Quantity</label> */}
            <input className="input" type="number" max='10' min='1' name="quantity"
              value={this.state.quantity || 0} onChange={this.handleChange}/>
          </div>
          <div className="column is-6">
            <button className="button is-dark" onClick={this.handleClick}>Add</button>
          </div>
        </div>}
        <div className="columns is-mobile is-12">
          {/* <div className="column is-4 is-offset-3"> */}
          { isAdmin() && <button className="button is-light has-text-centered deletebtn" onClick={this.handleDelete} >Delete</button>}
          { isAdmin() &&  <Link to={`/bags/${this.props.match.params.id}/edit`}>
            <button className="button is-dark has-text-centered edit">Edit</button>
          </Link>}
        </div>
      </section>

    );
  }
}
