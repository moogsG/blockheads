import React, {Component} from 'react';

import Steps from './components/steps.jsx';

class App extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    console.log("Connected!")
  }

  render() {
    return (
      <div data-target="#myScrollspy">
        <Steps/>
      </div>
    );
  }
}
export default App;
