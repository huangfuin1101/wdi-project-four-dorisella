import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
// import BagIndex from './components/Header';



import 'bulma';
import './scss/style.scss';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="section">
          <div className="hero-body">
            <div className="container">
              <Header />
              <Switch>
                <Route exact path="/" component={Home} />

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
