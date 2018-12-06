import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BagShowSection from './BagShowSection';




export default class BagShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleDelete = this.handleDelete.bind(this);

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

        <div>

          <button className="button is-dark has-text-centered deletebtn" onClick={this.handleDelete} >Delete</button>
          <Link to={`/bags/${this.props.match.params.id}/edit`}>
            <button className="button is-light has-text-centered edit">Edit</button>
          </Link>
        </div>



      </section>
    );
  }
}
