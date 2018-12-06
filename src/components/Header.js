import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { isAuthenticated, deleteToken, decodeToken, isAdmin } from '../lib/auth';
import { createFlashMessage } from '../lib/flash';


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    deleteToken();
    this.props.history.push('/');
    createFlashMessage('See you soon');

  }

  render() {
    console.log('this is decodeToken()', decodeToken().check);
    const { pathname } = this.props.location;
    const username = decodeToken().username;

    return (
      <nav className="navbar is-fixed-bottom is-dark">
        <div className="navbar-menu is-active">
          <div className="navbar-start">
            { pathname !== '/' && <Link className="navbar-item" to='/'>HOME</Link>}
            <Link className="navbar-item" to='/bags'> COLLECTION</Link>
            { isAdmin() && <Link className="navbar-item" to='/bags/new'> ADD AN ITEM</Link>}
            {!isAuthenticated() && <Link className="navbar-item" to='/login'> LOGIN</Link>}
            {!isAuthenticated() && <Link className="navbar-item" to='/register'> REGISTER</Link>}
            {isAuthenticated() && <a className="navbar-item" onClick={this.handleLogout}>LOGOUT { username.toUpperCase() }</a>}
            {isAuthenticated() && <Link className="navbar-item" to='/basket'> SHOPPING CART</Link>}
            {isAuthenticated()&& <Link className="navbar-item" to='/purchases'>ORDER HISTORY</Link>}
            {isAdmin()&& <Link className="navbar-item" to='/allpurchases'>ALL PURCHASES</Link>}
            {/* {isAuthenticated() && <p className="navbar-item">Welcome back! {decodeToken().username}</p>} */}
          </div>
        </div>
      </nav>

    );
  }
}

export default withRouter(Header);
