import React from 'react';
import axios from 'axios';


class BagUpdate extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      bag: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  componentDidMount(){
    axios.get(`/api/bags/${this.props.match.params.id}`)
      .then(result=> {
        this.setState({ bag: result.data});
      });
  }
  handleSubmit(event) {
    console.log('form subbmitted', this.state);
    event.preventDefault();
    axios.put(`/api/bags/${this.props.match.params.id}`, this.state.bag)
      .then(result => {
        console.log(result);
        this.props.history.push(`/bags/${this.props.match.params.id}`);
      });
  }

  handleChange({ target: {name, value}}) {
    this.setState({ bag: { ...this.state.bag, [name]: value }});
  }

  render() {
    return(
      <section className="hero is-light is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="columns">
              <div className="column is-6 is-offset-3 is-mobile">
                <h3 className="title has-text-grey">Edit an item</h3>
                <div className="box">
                  <form onSubmit={this.handleSubmit}>
                    <div className="field">
                      <div className="control">
                        <input className="input " onChange={this.handleChange}  value={this.state.bag.name || ''}  name="name"  placeholder="name"/>
                      </div>
                    </div>
                    <div className="field">
                      <div className="control">
                        <input className="input" onChange={this.handleChange}   value={this.state.bag.brand || ''}  name="brand"  placeholder="brand"/>
                      </div>
                    </div>
                    <div className="field">
                      <div className="control">
                        <input className="input" onChange={this.handleChange}   value={this.state.bag.description || ''}  name="description"  placeholder="description"/>
                      </div>
                    </div>
                    <div className="field">
                      <div className="control">
                        <input className="input" onChange={this.handleChange}   value={this.state.bag.detail || ''}  name="detail"  placeholder="detail"/>
                      </div>
                    </div>
                    <div className="field">
                      <div className="control">
                        <input className="input" onChange={this.handleChange}   value={this.state.bag.price || ''}  name="price"  placeholder="price"/>
                      </div>
                    </div>
                    <div className="field">
                      <div className="control">
                        <input className="input" onChange={this.handleChange}   value={this.state.bag.image || ''}  name="image"  placeholder="imageUrl"/>
                      </div>
                    </div>
                    <button className="button is-light">Update</button>
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


export default BagUpdate;
