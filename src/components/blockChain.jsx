import React, { Component } from 'react';
import Chain from '../presentational/chain.jsx';
import NavBar from '../presentational/navBar.jsx';

class BlockChain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chain: fillTemp().slice(0, 9),
      privKey: '77'
    };
    this.sendWS = this.sendWS.bind(this);
    this.addTo = this.addTo.bind(this);
  }

  componentDidMount() {
    this.recive = new WebSocket('ws:localhost:6001');
    console.log('Connected!');
    this.recive.onmessage = event => {
      let parseBlock = JSON.parse(JSON.parse(event.data).data);
      let chain = this.state.chain.concat(parseBlock);
      this.setState({
        chain: chain
      });
    };
    this.recive.onopen = event => {
      console.log('opened');
      let type = {
        type: 1
      };
      this.recive.send(JSON.stringify(type));
    };
  }

  sendWS(event) {
    var json_upload =
      'data=' + JSON.stringify({ data: 'John Rambo', from: '3489032840985' });
    let connection = new XMLHttpRequest();
    connection.open('POST', 'http://localhost:3001/mine', true);
    connection.setRequestHeader(
      'Content-Type',
      'application/x-www-form-urlencoded'
    );

    connection.onreadystatechange = function() {
      if (connection.readyState != 4 || connection.status != 200) return;
    };
    connection.send(json_upload);
  }

  addTo() {
    let chain = fillTemp();
    console.log(chain);
    this.setState({
      chain: chain
    });

    event.preventDefault();
    $('.rectangle')
      .addClass('restart')
      .removeClass('moveRight');
    setInterval(function() {
      $('.rectangle')
        .removeClass('restart')
        .addClass('moveRight');
    }, 1);

    console.log('SUPPPPPP');
    return false;
  }

  render() {
    let blocks = this.state.chain.map(blocks => {
      console.log(blocks.hash);
      typeof blocks.data === 'object'
        ? null
        : (blocks.data = JSON.parse(blocks.data));

      return (
        <Chain
          key={blocks.hash}
          hash={blocks.hash}
          timestamp={blocks.timestamp}
          data={blocks.data.data}
          prevHash={blocks.prevHash}
        />
      );
    });

    return (
      // <div onClick={this.sendWS}>{blocks}</div>
      <div>
        <NavBar chain={this.state.chain} privKey={this.state.privKey} />
        <button id="test" onClick={this.addTo}>
          TEST
        </button>
      </div>
    );
  }
}
export default BlockChain;

function fillTemp() {
  let temp = [
    {
      hash: 1111,
      timestamp: 111,
      data: {
        data: 'stuff'
      },
      prevHash: 11
    },
    {
      hash: 2222,
      timestamp: 222,
      data: {
        data: 'stuff2'
      },
      prevHash: 22
    },
    {
      hash: 3333,
      timestamp: 333,
      data: {
        data: 'stuff3'
      },
      prevHash: 33
    },
    {
      hash: 4444,
      timestamp: 444,
      data: {
        data: 'stuff4'
      },
      prevHash: 44
    },
    {
      hash: 5555,
      timestamp: 555,
      data: {
        data: 'stuff5'
      },
      prevHash: 55
    },
    {
      hash: 6666,
      timestamp: 666,
      data: {
        data: 'stuff6'
      },
      prevHash: 66
    },
    {
      hash: 7777,
      timestamp: 777,
      data: {
        data: 'stuff7'
      },
      prevHash: 77
    },
    {
      hash: 8888,
      timestamp: 888,
      data: {
        data: 'stuff8'
      },
      prevHash: 88
    },
    {
      hash: 9999,
      timestamp: 999,
      data: {
        data: 'stuff9'
      },
      prevHash: 99
    },
    {
      hash: 10101010,
      timestamp: 101010,
      data: {
        data: 'stuff10'
      },
      prevHash: 1010
    }
  ];
  return temp;
}
