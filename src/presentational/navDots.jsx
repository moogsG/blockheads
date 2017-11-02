import React, {Component} from 'react';

class navDots extends Component {
  render() {
    return (
      <div data-spy="affix" id="dot-nav">
        <ul>
          <li className="active" title="StepOne">
            <a href="#StepOne"></a>
          </li>
          <li className="" title="StepTwo">
            <a href="#StepTwo"></a>
          </li>
          <li className="" title="InvalidHash">
            <a href="#InvalidHash"/>
          </li>
          <li className="" title="StepThree">
            <a href="#StepThree"></a>
          </li>
          <li className="" title="StepFour">
            <a href="#StepFour"></a>
          </li>
          <li className="" title="StepFive">
            <a href="#StepFive"></a>
          </li>
          <li className="" title="StepSix">
            <a href="#StepSix"></a>
          </li>
          <li className="" title="StepSeven">
            <a href="#StepSeven"></a>
          </li>
        </ul>
      </div>
    )
  }
}
export default navDots;
