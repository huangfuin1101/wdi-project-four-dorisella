import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class Header extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const { pathname } = this.props.location;

    return (
      <nav className="navbar is-fixed-bottom is-dark">
        <div className="navbar-menu is-active">
          <div className="navbar-start">
            { pathname !== '/' && <Link className="navbar-item" to='/'>Home</Link>}
            <Link className="navbar-item" to='/bags'> Collection</Link>
            <Link className="navbar-item" to='/bags/new'> Add an item</Link>
            <Link className="navbar-item" to='/login'> Login</Link>
            <Link className="navbar-item" to='/basket'> Shopping Cart</Link>
            <Link className="navbar-item" to='/purchases'> Purchase history</Link>
            <Link className="navbar-item" to='/register'> Register</Link>
          </div>
        </div>
      </nav>

    );
  }
}

export default withRouter(Header);
