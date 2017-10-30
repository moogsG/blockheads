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
        <div className="blocks">
          <marquee behavior="alternate">{this.props.data}</marquee>

        </div>
      </div>
    );
  }
}

export default IncomingChain;
