import React, {Component} from 'react';
const SHA256 = require('crypto-js/sha256');

class StepSeven extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hash: ''
    }
    this.sendState = this.sendState.bind(this);
    this.change = this.change.bind(this);
  }
  sendState(event) {
    let newState = {
      favFood: event.target.value
    };
    this.props.onStateChange(newState);

  }
  change(event) {
    this.props.sendWS();
  }

  render() {

    return (
      <section id="StepSeven">
        <div className="container">
          <div data-aos="flip-up">
            <div className="row">
              <div className="col-md-12 text-center">
                <div className="line"/>
                <h1>SEND THE BLOCK</h1>
                <div className="line"/>
              </div>
            </div>
            <div className="col-md-12">
              <div className="block">
                <div className="row">
                  <div className="col-md-12">
                    <div className="block-header text-center">
                      <span className="block-height float-left" data-toggle="tooltip" title="This is the number of the block.">Height</span>
                      <h2>Block Hash</h2>
                      <h4>{this.state.hash}</h4>
                    </div>
                  </div>
                  <div className="col-md-12"></div>
                  <div className="col-md-12">
                    <div className="input-group">
                      <span className="input-group-addon" id="pubKeyLab">
                        PubKey
                      </span>
                      <input type="text" className="form-control" id="pubKey" aria-describedby="pubKeyLab" value={this.props.pubKey}/>
                    </div>
                    <div className="input-group">
                      <span className="input-group-addon" id="transmissionLab">
                        Transmission
                      </span>
                      <input onChange={this.sendState} type="text" className="form-control" id="transmission" aria-describedby="transmissionLab" value={this.props.favFood} />
                    </div>
                    <div className="block-footer">
                      <div className="row">
                        <div className="col-md-6">
                          <h4 data-toggle="tooltip" title="39034456789534455454534">PREVHASH</h4>
                        </div>
                        <div className="col-md-6 ">
                          <button id="sendTransmission" onClick={this.props.sendWS} className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent float-right">
                            SEND
                          </button>

                          <h4 className="float-right" data-toggle="tooltip" title="39034456789534455454534"></h4>
                        </div>
                        <div className="col-md-12">
                        <div className="alert alert-danger empty-block display-none text-center" role="alert">
                          The block is missing some <b>VITAL</b> infomation!  Did you go through the steps?
                        </div>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="transmissionSent" className="mdl-js-snackbar mdl-snackbar">
          <div className="mdl-snackbar__text"></div>
          <button className="mdl-snackbar__action" type="button"></button>
        </div>
      </section>
    )
  }
}
export default StepSeven;
