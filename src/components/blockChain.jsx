import React, {
  Component
} from 'react';
import Chain from '../presentational/chain.jsx';
import NavBar from '../presentational/navBar.jsx';

class BlockChain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chain: [],
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
      this.addTo();
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
      'data=' + JSON.stringify({
        data: 'John Rambo',
        from: '3489032840985'
      });
    let connection = new XMLHttpRequest();
    connection.open('POST', 'http://localhost:3001/mine', true);
    connection.setRequestHeader(
      'Content-Type',
      'application/x-www-form-urlencoded'
    );

    connection.onreadystatechange = function () {
      if (connection.readyState != 4 || connection.status != 200) return;
    };
    connection.send(json_upload);
  }

  addTo() {
    $('.rectangle').addClass('restart').removeClass('moveRight');

    setInterval(function () {
      $('.rectangle').removeClass('restart').addClass('moveRight');
    }, 200);
  }

  render() {
    return (
      <div>
        <NavBar chain={this.state.chain} privKey={this.state.privKey} />
        <button id="test" onClick={this.sendWS}>
          TEST
        </button>
      </div>
    );
  }
}

export default BlockChain;
