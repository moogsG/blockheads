import React, {Component} from 'react';

class IncomingChain extends Component {
  constructor(props) {
    super(props);
  }

  addColor() {
    return this.props.privKey == this.props.prevHash
      ? ' hilight'
      : '';
  }

  render() {
    return (
      <div className={'rectangle moveRight1 navbar-brand' + this.addColor()}>
        <span className="index">{this.props.index}</span>
        <span className="hash">{this.props.hash.substring(0, 5)}</span>
      </div>
    );
  }
}

export default IncomingChain;
