import React, { Component } from 'react';

class IncomingChain extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className="rectangle moveRight1 navbar-brand"
        onClick={this.props.move}
      >
        <span className="index">{this.props.index}</span>
        <span className="hash">{this.props.hash}</span>
      </div>
    );
  }
}

export default IncomingChain;
