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
    const chain = this.props.wholeChain;
    const lastSix = chain.slice(Math.max(chain.length - 7, 1));
    const block = lastSix.map(block => {
      return (
        <IncomingChain
          key={block.hash}
          move={this.move}
          index={block.index + ' INDEX'}
          content={block.hash + ' BLOCK'}
        />
      );
    });

    return (
      <nav className="navbar fixed-top navbar-light bg-faded">
        <div className="messages">{block}</div>
        <div id="navLine" />
      </nav>
    );
  }
}
export default navBar;
