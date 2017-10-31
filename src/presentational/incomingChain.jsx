import React, {Component} from 'react';

class IncomingChain extends Component {
  constructor(props) {
    super(props);
  }

  addColor() {
    return this.props.pubKey == this.props.from ? ' hilight' : '';
  }

  render() {
    return (
      <div className={'rectangle moveRight1 navbar-brand' + this.addColor()}>
        <div className="float-left blocks">
        <li>
            <span>{this.props.nonce}</span>
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
