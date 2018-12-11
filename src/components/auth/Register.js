import React  from 'react';
import axios from 'axios';
import { createFlashMessage } from '../../lib/flash';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event){
    event.preventDefault();
    axios.post('/api/register', this.state)
      .then(() => {
        createFlashMessage('Thank you for register!');
        this.props.history.push('/login');
      })
      .catch(() => {
        createFlashMessage('email or passpord does\'s match');
      });
  }
  handleChange({ target: { name, value }}) {
    this.setState({ [name]: value });
  }

  render() {
    return (
      <section className="hero is-light is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="columns is-mobile is-tablet is-desktop">
              <div className="column is-4-desktop is-offset-4-desktop is-6-tablet is-12-mobile">
                <h3 className="title has-text-grey">Register</h3>
                <div className="box">
                  <form onSubmit={this.handleSubmit}>
                    <div className="field">
                      <div className="control">
                        <input className="input " onChange={this.handleChange}  value={this.state.username || ''}  name="username"  placeholder="username"/>
                      </div>
                    </div>
                    <div className="field">
                      <div className="control">
                        <input className="input " onChange={this.handleChange}  value={this.state.email || ''}  name="email"  placeholder="email"/>
                      </div>
                    </div>
                    <div className="field">
                      <div className="control">
                        <input className="input" onChange={this.handleChange}   value={this.state.password || ''}  name="password" type="password" placeholder="password"/>
                      </div>
                    </div>
                    <button className="button is-dark">Register</button>
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

export default Register;
