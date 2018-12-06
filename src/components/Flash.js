import React from 'react';
import { getFlashMessage, clearFlashMessage } from '../lib/flash';

class Flash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.clearMessage = this.clearMessage.bind(this);
  }

  componentDidUpdate() {
    const flash = getFlashMessage();
    if (!this.state.flash && flash.message) {
      this.setState({ flash: flash });
      setTimeout(this.clearMessage, 3000);
    }
  }

  clearMessage() {
    clearFlashMessage();
    this.setState({ flash: null });
  }

  render() {
    return (
      <div className="flash-container">
        {this.state.flash &&
          <div className={`notification is-${this.state.flash.type}`}>
            <p>{this.state.flash.message}</p>
            <button className="delete" onClick={this.clearMessage}></button>
          </div>
        }
      </div>
    );
  }
}

export default Flash;
