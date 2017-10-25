import React, {Component} from 'react';

import StepOne from '../presentational/stepOne.jsx';
import StepTwo from '../presentational/stepTwo.jsx';
import StepThree from '../presentational/stepThree.jsx';
import StepFour from '../presentational/stepFour.jsx';
import StepFive from '../presentational/stepFive.jsx';
import StepSix from '../presentational/stepSix.jsx';

const SHA256 = require("crypto-js/sha256");

class Steps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      privKey: '',
      pubKey: '',
      message: ''
    };

    this.onStateChange = this.onStateChange.bind(this);
  }

  onStateChange(newState) {
    Promise.resolve(
      this.setState({
        ...newState
      })
    )
    .then(() => {
      let pubKey = SHA256(this.state.privKey).toString();
      this.setState({
        pubKey
      })
    })
  }

  render() {
    return (
      <div>
        <StepOne
          onStateChange = {this.onStateChange}
          privKey = {this.state.privKey}
          />
          <StepTwo privKey = {this.state.privKey}
            pubKey = {this.state.pubKey}
            picks = {this.state.picks}
            hash = {this.state.hash}
            onStateChange = {this.onStateChange} />
        <StepThree
          onStateChange = {this.onStateChange}
          pubKey = {this.state.pubKey}
          isPubKey = {this.state.isPubKey}
          />
        <StepFour
          favFood = {this.state.favFood}
          />
        <StepFive
          tempBlock = {this.state.tempBlock}
          onStateChange = {this.onStateChange}
        />
        <StepSix />
      </div>
    );
  }
}
export default Steps;
