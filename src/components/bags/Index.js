import React from 'react';
import BagBox from './BagBox';
import axios from 'axios';


class Index extends React.Component{
  constructor(props){
    super(props);
    // this.state = {};
    this.state = {
      search: ''
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    axios.get('/api/bags')
      .then(result => this.setState({ bags: result.data,  filteredBags: result.data}));
  }

  handleSearch(event){
    this.setState({ search: event.target.value });
    let filteredBags = this.state.filteredBags;
    const bags = this.state.bags;
    const search = this.state.search;
    filteredBags = bags.filter(bag =>
      bag.name.toLowerCase().includes(search.toLowerCase()) ||
      bag.brand.toLowerCase().includes(search.toLowerCase())||
      bag.unitPrice.toString().includes(search.toString())
    );
    this.setState({ filteredBags: filteredBags });
  }

  render() {
    return (
      <div className="index">
        <div className="columns is-mobile is-multiline">
          <div className="column is-4-desktop is-offset-8-desktop">
            <form>
              <input className="input is-small search" placeholder=" 🔍" ref={input => this.search = input}  onChange={this.handleSearch}/>
            </form>
          </div>
          {/* <div className="column is-2">
            <i className="fas fa-search search"></i>
          </div> */}
        </div>
        <div className="columns is-multiline is-mobile">
          {this.state.filteredBags ?
            this.state.filteredBags.map(bag =>
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
