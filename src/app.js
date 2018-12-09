import React from 'react';
import ReactDOM from 'react-dom';
import Flash from './components/Flash';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import BagIndex from './components/bags/Index';
import BagShow from './components/bags/Show';
import BagNew from './components/bags/New';
import BagEdit from './components/bags/Edit';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Basket from './components/basket/Basket';
import Purchase from './components/basket/PurchaseHistory';
import AllPurchases from './components/basket/AllPurchases';


import 'bulma';
import './scss/main.scss';



class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="section">
          <div className="hero-body">
            <div className="container">
              <Header />
              <Flash />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/bags" component={BagIndex} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/bags/new" component={BagNew} />
                <Route exact path="/basket" component={Basket} />
                <Route exact path="/purchases" component={Purchase} />
                {/* <Route exact path="/stats" component={AllPurchases} /> */}
                <Route exact path="/allpurchases" component={AllPurchases} />
                <Route path="/bags/:id/edit" component={BagEdit} />
                <Route path="/bags/:id" component={BagShow} />
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
