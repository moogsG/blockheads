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

    this.handleStateChange = this.handleStateChange.bind(this);
    this.handleMine = this.handleMine.bind(this);
    this.handleNewBlock = this.handleNewBlock.bind(this);
  }

  componentDidMount() {
    //Adds websocket, wss for https
    this.receive = new WebSocket('wss:blockheadzchain.herokuapp.com');

    //On message
    // Raise snackbar and parses data from block
    this.receive.onmessage = event => {

      const snackbarContainer = document.querySelector('#transmissionSent');
      const showToastButton = document.querySelector('#sendTransmission');
      let parseBlock = JSON.parse(JSON.parse(event.data).data);

      if ((parseBlock[0].data).search("BLOCKHEADZ") > 0) {
        // Do nothing
      } else {

        const chain = this.state.chain.concat(parseBlock);
        this.setState({chain: chain});
        this.addTo();
        $('#loading').addClass('display-none-hidden')

        const data = {
          message: 'Block Submitted!'
        }

        snackbarContainer.MaterialSnackbar.showSnackbar(data);
      }
    };

    // On WS connection set type to receive current chain
    this.receive.onopen = event => {
      console.log('Connected to Chain!');

      const type = {
        type: 1
      };

      this.receive.send(JSON.stringify(type));
    };
  }

  //Sends data to WS
  handleMine(event) {
    event.preventDefault();
    $('.block').removeClass('hvr-buzz-out');
    $('#loading').removeClass('display-none-hidden')

    if (this.state.pubKey != 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855' && this.state.favFood) {

      const json_upload = 'data=' + JSON.stringify({data: this.state.favFood, from: this.state.pubKey});
      const connection = new XMLHttpRequest();
      connection.open('POST', 'https://blockheadzchain.herokuapp.com/mine', true);
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

  // Adds animation to blocks
  handleNewBlock() {
    $('.rectangle').addClass('restart').removeClass('moveRight');

    setInterval(function () {
      $('.rectangle').removeClass('restart').addClass('moveRight');
    }, 100);

    setInterval(function () {
      return false;
    }, 2000);
  }

  // Sets state
  handleStateChange(newState) {
    this.setState({...newState}, () => {
      const pubKey = SHA256(this.state.privKey).toString();
      this.setState({pubKey});
    })
  }

  render() {
    return (
      <div data-target="#myScrollspy">
        <NavBar chain={this.state.chain} pubKey={this.state.pubKey}/>
        <Steps { ...this.state } handleStateChange={this.handleStateChange} handleMine={this.handleMine}/>
      </div>
    );
  }
}
export default App;
