import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { isAuthenticated, deleteToken, decodeToken, isAdmin } from '../lib/auth';
import { basketAmount, getBasket } from '../lib/basket';
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
      <nav className="navbar is-fixed-bottom has-text-black">
        <div className="navbar-menu is-active">
          <div className="navbar-start header">
            <Link id="home"className="navbar-item" to='/'>DORISELLA</Link>
            <Link className="navbar-item bar" to='/bags'> COLLECTION</Link>
            { isAdmin() && <Link className="navbar-item bar" to='/bags/new'> ADD AN ITEM</Link>}
            {!isAuthenticated()  && pathname !== '/login' && <Link className="navbar-item bar" to='/login'> LOGIN</Link>}
            {!isAuthenticated() && pathname !== '/register' && <Link className="navbar-item bar" to='/register'> REGISTER</Link>}
            {isAuthenticated() && <a className="navbar-item bar" onClick={this.handleLogout}>LOGOUT { username.toUpperCase() }</a>}
            {isAuthenticated() && getBasket() && <Link className="navbar-item bar" to='/basket'> <i className="fas fa-shopping-basket"></i>  { basketAmount()}</Link>}
            {isAuthenticated() && pathname !== '/basket' &&  <Link className="navbar-item bar" to='/basket'> SHOPPING CART</Link>}
            {isAuthenticated() &&  pathname !== '/purchases'  && <Link className="navbar-item bar" to='/purchases'>ORDER HISTORY</Link>}
            {isAdmin()&& <Link className="navbar-item bar" to='/allpurchases'>ALL PURCHASES</Link>}
            {/* {isAuthenticated() && <p className="navbar-item">Welcome back! {decodeToken().username}</p>} */}
          </div>
        </div>
      </nav>

    );
  }
}

export default withRouter(Header);
