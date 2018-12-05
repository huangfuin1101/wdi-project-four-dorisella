import React from 'react';
import BagBox from './BagBox';
import axios from 'axios';

class Index extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  componentDidMount() {
    console.log('this is', 'mount');
    axios.get('/api/bags')
      .then(result => this.setState({ bags: result.data}));
  }
  render() {
    console.log('this is', 'Mount');
    return (
      <div className="index">
        <div className="columns is-multiline is-mobile">
          {this.state.bags ?
            this.state.bags.map(bag =>
              <BagBox key={bag._id} bag={bag} />)
            :
            <p> Loading...</p>
          }
        </div>
      </div>
    );
  }
}




export default Index;
