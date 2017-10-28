import React, {Component} from 'react';
import Steps from './components/steps.jsx';
import Chain from './presentational/chain.jsx';
import NavBar from './presentational/navBar.jsx';
const SHA256 = require('crypto-js/sha256');
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chain: [],
      privKey: '',
      pubKey: '',
      favFood: ''
    };

    this.onStateChange = this.onStateChange.bind(this);
    this.sendWS = this.sendWS.bind(this);
    this.addTo = this.addTo.bind(this);
  }

  componentDidMount() {
    this.recive = new WebSocket('ws:localhost:6001');

    this.recive.onmessage = event => {
      let parseBlock = JSON.parse(JSON.parse(event.data).data);
      let chain = this.state.chain.concat(parseBlock);
      this.setState({chain: chain});
    };

    this.recive.onopen = event => {
      console.log('Connected!');

      let type = {
        type: 1
      };

      this.recive.send(JSON.stringify(type));
    };

  }

  sendWS(event) {

    let json_upload = 'data=' + JSON.stringify({data: this.state.favFood , from: this.state.pubKey});
    let connection = new XMLHttpRequest();
    connection.open('POST', 'http://localhost:3001/mine', true);
    connection.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    connection.onreadystatechange = function() {

      if (connection.readyState != 4 || connection.status != 200) {
        return;
      }
    };

    connection.send(json_upload);
    this.addTo();

  }

  addTo() {
    $('.rectangle').addClass('restart').removeClass('moveRight');

    setInterval(function() {
      $('.rectangle').removeClass('restart').addClass('moveRight');
    }, 100);

    setInterval(function() {
      return false;
    }, 2000);
  }

  onStateChange(newState) {
    Promise.resolve(
      this.setState({
        ...newState
      })
    ).then(() => {
      let pubKey = SHA256(this.state.privKey).toString();
      this.setState({ pubKey });
    });
  }

  render() {
    return (
      <div data-target="#myScrollspy">
        <NavBar
          chain = { this.state.chain }
          privKey = { this.state.privKey }
        />
        <Steps
          { ...this.state }
          onStateChange={ this.onStateChange }
          sendWS={ this.sendWS } />
      </div>
    );
  }
}
export default App;
