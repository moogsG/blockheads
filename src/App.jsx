import React, {Component} from 'react';
import StepThree from './presentational/stepThree.jsx';
import StepFour from './presentational/stepFour.jsx';
import StepFive from './presentational/stepFive.jsx';

class App extends Component {
  render() {
    return (
      <div>
      <StepThree />
      <StepFour />
      <StepFive />
      </div>
    );
  }
}
export default App;
