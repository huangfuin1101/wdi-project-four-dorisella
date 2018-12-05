import React from 'react';
import axios from 'axios';
import BagShowSection from './BagShowSection';




export default class BagShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    axios.get(`/api/bags/${this.props.match.params.id}`)
      .then(res => {
        this.setState({bag: res.data});
        console.log('this.state bag show', this.state);
      });
  }


  render() {
    const bag = this.state.bag;
    return (
      <section>
        {bag
          ?
          <div className="columns">
            <BagShowSection bag={bag} />
          </div>
          :
          <p>Please wait...</p>}

        <div>
        </div>
      </section>
    );
  }
}
