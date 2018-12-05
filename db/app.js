import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Home from './components/Home';
import BrandsIndex from './components/brands/Index';
import BrandsShow from './components/brands/Show';
import BrandsNew from './components/brands/New';
import BrandsEdit from './components/brands/Edit';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bulma';
import './scss/style.scss';

class App extends React.Component {

  render() {
    return(
      <section className="hero brand">
        <div className="hero-body">
          <div className="container">
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/brands" component={BrandsIndex} />
              <Route exact path="/brands/new" component={BrandsNew} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route path="/brands/:id/edit" component={BrandsEdit} />
              <Route path="/brands/:id" component={BrandsShow} />
            </Switch>
          </div>
        </div>
      </section>
    );
  }
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
