import React from 'react';
import axios from 'axios';
import { getToken } from '../../lib/auth';


class BagNew extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log('form subbmitted', this.state);
    axios.post('/api/bags', this.state,{headers: {
      Authorization: `Bearer ${getToken()}`}})
      .then(result => {
        console.log('this is result', result);
        this.props.history.push(`/bags/${result.data._id}`);
      });
  }

  handleChange({ target: {name, value }}) {
    console.log('this is name', { [name]: value });
    console.log('event.target.name is', event.target.name, this.state);
    this.setState({ [name]: value });
  }

  render() {
    return(
      <section className="hero is-light is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="columns">
              <div className="column is-6 is-offset-3 is-mobile">
                <h3 className="title has-text-grey">Add an item</h3>
                <div className="box">
                  <form onSubmit={this.handleSubmit}>
                    <div className="field">
                      <div className="control">
                        <input className="input " onChange={this.handleChange}  value={this.state.name || ''}  name="name"  placeholder="name"/>
                      </div>
                    </div>
                    <div className="field">
                      <div className="control">
                        <input className="input" onChange={this.handleChange}   value={this.state.brand || ''}  name="brand"  placeholder="brand"/>
                      </div>
                    </div>
                    <div className="field">
                      <div className="control">
                        <input className="input" onChange={this.handleChange}   value={this.state.description || ''}  name="description"  placeholder="description"/>
                      </div>
                    </div>
                    <div className="field">
                      <div className="control">
                        <input className="input" onChange={this.handleChange}   value={this.state.detail || ''}  name="detail"  placeholder="detail"/>
                      </div>
                    </div>
                    <div className="field">
                      <div className="control">
                        <input className="input" onChange={this.handleChange}   value={this.state.price || ''}  name="price"  placeholder="price"/>
                      </div>
                    </div>
                    <div className="field">
                      <div className="control">
                        <input className="input" onChange={this.handleChange}   value={this.state.image || ''}  name="image"  placeholder="imageUrl"/>
                      </div>
                    </div>
                    <button className="button is-light">Add</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}


export default BagNew;
