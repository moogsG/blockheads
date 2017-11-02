import React, {Component} from 'react';
import Steps from './components/steps.jsx';
import NavBar from './presentational/navBar.jsx';
const SHA256 = require('crypto-js/sha256');
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chain: [],
      privKey: '',
      pubKey: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
      favFood: ''
    };

    this.onStateChange = this.onStateChange.bind(this);
    this.sendWS = this.sendWS.bind(this);
    this.addTo = this.addTo.bind(this);
  }

  componentDidMount() {
    this.recive = new WebSocket('ws:localhost:6001');

    this.recive.onmessage = event => {
      var snackbarContainer = document.querySelector('#transmissionSent');
      var showToastButton = document.querySelector('#sendTransmission');
      let parseBlock = JSON.parse(JSON.parse(event.data).data);
      let chain = this.state.chain.concat(parseBlock);
      this.setState({chain: chain});
      this.addTo();
      $('#loading').addClass('display-none-hidden')
      var data = {
        message: 'Block Submitted!'
      }
      snackbarContainer.MaterialSnackbar.showSnackbar(data);
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
    $('.block').removeClass('hvr-buzz-out');
    $('#loading').removeClass('display-none-hidden')

    if (this.state.pubKey != 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855' && this.state.favFood) {
      let json_upload = 'data=' + JSON.stringify({data: this.state.favFood, from: this.state.pubKey});
      let connection = new XMLHttpRequest();
      connection.open('POST', 'http://localhost:3001/mine', true);
      connection.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

      connection.onreadystatechange = function () {

        if (connection.readyState != 4 || connection.status != 200) {
          return;
        }
      };

      connection.send(json_upload);

      this.setState({favFood: ''})
    } else {
      $('.block').addClass('hvr-buzz-out')
      $('.alert-danger').removeClass('display-none')
      $('#loading').addClass('display-none-hidden')
    }

  }

  addTo() {
    $('.rectangle').addClass('restart').removeClass('moveRight');

    setInterval(function () {
      $('.rectangle').removeClass('restart').addClass('moveRight');
    }, 100);

    setInterval(function () {
      return false;
    }, 2000);
  }

  onStateChange(newState) {
    Promise.resolve(this.setState({
      ...newState
    })).then(() => {
      let pubKey = SHA256(this.state.privKey).toString();
      this.setState({pubKey});
    });
    $('.box').removeClass('hvr-buzz-out')
    $('.block').removeClass('hvr-buzz-out')
    $('.alert-danger').addClass('display-none');
    $('.empty-block').addClass('display-none');
  }

  render() {
    return (
      <div data-target="#myScrollspy">
        <NavBar chain={this.state.chain} pubKey={this.state.pubKey}/>
        <Steps { ...this.state } onStateChange={this.onStateChange} sendWS={this.sendWS}/>
      </div>
    );
  }
}
export default App;
