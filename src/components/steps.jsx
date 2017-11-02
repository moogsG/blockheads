import React, {Component} from 'react';
import StepOne from '../presentational/stepOne.jsx';
import StepTwo from '../presentational/stepTwo.jsx';
import StepThree from '../presentational/stepThree.jsx';
import StepFour from '../presentational/stepFour.jsx';
import StepFive from '../presentational/stepFive.jsx';
import StepSix from '../presentational/stepSix.jsx';
import NavDots from '../presentational/navDots.jsx';
import StepSeven from '../presentational/stepSeven.jsx';
import InvalidHash from '../presentational/invalidHash.jsx'

const SHA256 = require('crypto-js/sha256');

class Steps extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <NavDots/>
        <StepOne onStateChange={this.props.onStateChange} privKey={this.props.privKey}/>
        <StepTwo
          privKey={this.props.privKey}
          pubKey={this.props.pubKey}
          picks={this.props.picks}
          hash={this.props.hash}
          onStateChange={this.props.onStateChange}/>
        <StepThree onStateChange={this.props.onStateChange} pubKey={this.props.pubKey} isPubKey={this.props.isPubKey}/>
        <StepFour favFood={this.props.favFood}/>
        <StepFive
          tempBlock={this.props.tempBlock}
          onStateChange={this.props.onStateChange}
          favFood={this.props.favFood}
          pubKey={this.props.pubKey}/>
        <StepSix/>
        <InvalidHash/>
        <StepSeven
          pubKey={this.props.pubKey}
          favFood={this.props.favFood}
          sendWS={this.props.sendWS}
          onStateChange={this.props.onStateChange}/>
      </div>
    );
  }
}
export default Steps;
