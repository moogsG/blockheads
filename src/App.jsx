import React, {Component} from 'react';
import Steps from './components/steps.jsx';
import BlockChain from './components/blockChain.jsx';

class App extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.connection = new WebSocket('ws:localhost:3001');
    console.log("Connected!")
  }

  render() {
    return (
      <div data-target="#myScrollspy">
        <BlockChain />
        <Steps />
      </div>
    );
  }
}
export default App;
