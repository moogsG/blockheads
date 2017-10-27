import React, { Component } from 'react';

class Chain extends Component {
  render() {
    return (
      <div>
        <div>{this.props.data}</div>
        <div>{this.props.timestamp}</div>
        <div>{this.props.hash}</div>
      </div>
    );
  }
}
export default Chain;
