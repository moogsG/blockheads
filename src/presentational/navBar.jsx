import React, {Component} from 'react';
import IncomingChain from './incomingChain.jsx';

class navBar extends Component {

  render() {
    let chain = this.props.chain;

    chain = chain.slice(Math.max(chain.length - 12, 1));
    chain.reverse();
    const block = chain.map(blocks => {
      typeof blocks.data === 'object'
        ? null
        : (blocks.data = JSON.parse(blocks.data));
      return (
        <IncomingChain
          key={blocks.hash}
          index={blocks.index}
          hash={blocks.hash}
          timestamp={blocks.timestamp}
          data={blocks.data.data}
          from={blocks.data.from}
          prevHash={blocks.prevHash}
          pubKey={this.props.pubKey}
          nonce={blocks.nonce}/>
      );
    });

    return (
      <nav className="navbar fixed-top bg-faded">
        <div className="blocks">{block}</div>
        <div id="navLine"/>
      </nav>
    );
  }
}
export default navBar;
