import React, { Component } from 'react';
import IncomingChain from './incomingChain.jsx';

class navBar extends Component {
  move() {
    $('.moveRight2')
      .addClass('moveRight3')
      .removeClass('moveRight2');
    $('.moveRight1')
      .addClass('moveRight2')
      .removeClass('moveRight1');
    $('.navbar')
      .closest('.offScreen')
      .addClass('moveRight1')
      .removeClass('.offScreen');
  }

  render() {
    let chain = this.props.chain;

    chain = chain.slice(Math.max(chain.length - 7, 1));
    chain.reverse();
    const block = chain.map(blocks => {
      typeof blocks.data === 'object'
        ? null
        : (blocks.data = JSON.parse(blocks.data));
      return (
        <IncomingChain
          key={blocks.hash}
          hash={blocks.hash}
          timestamp={blocks.timestamp}
          data={blocks.data.data}
          prevHash={blocks.prevHash}
          privKey={this.props.privKey}
        />
      );
    });

    return (
      <nav className="navbar fixed-top navbar-light bg-faded">
        <div className="blocks">{block}</div>
        <div id="navLine" />
      </nav>
    );
  }
}
export default navBar;
