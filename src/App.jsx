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
      <Steps />
    );
  }
}
export default App;
