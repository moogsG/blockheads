import React, {Component} from 'react';

class IncomingChain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      block: "Index: " + props.index + "\nHash: " + props.hash + "\nTimestamp: " + props.timestamp + "\nData: " + props.data + "\nFr" +
          "om: " + props.from + "\nNonce: " + props.nonce + "\nPrHash: " + props.prevHash

    }
  }

  addColor() {
    return this.props.pubKey == this.props.from
      ? ' hilight'
      : '';
  }
  render() {
    return (
      <div className={'rectangle moveRight1 navbar-brand' + this.addColor()}>
        <div className="float-left blocks" data-toggle="popover" title={this.state.block}>
          <li>
            <span>#{this.props.index}</span>
          </li>
          <li>
            <marquee>{this.props.data}</marquee>
          </li>
        </div>
      </div>
    );
  }
}

export default IncomingChain;
