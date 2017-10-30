import React, {Component} from 'react';
const SHA256 = require('crypto-js/sha256');

  class StepSeven extends Component {
    constructor(props) {
      super(props);
      this.state={
        hash: ''
      }
      this.change = this.change.bind(this);
    }

    change(event) {
      this.props.sendWS();
    }

    render() {

      return (
        <div className="container">
          <div className="row">
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
            <div className="col-md-12">
            </div>
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
                <input type="text" className="form-control" id="transmission" aria-describedby="transmissionLab" value={this.props.favFood}/>
              </div>
              <div className="block-footer">
                <div className="row">
                  <div className="col-md-6">
                    <h4 data-toggle="tooltip" title="39034456789534455454534">PREVHASH</h4>
                  </div>
                  <div className="col-md-6 ">
                    <h4 className="float-right" data-toggle="tooltip" title="39034456789534455454534"></h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
        </div>
        <button onClick={this.props.sendWS}>SEND THE transmission</button>
      </div>
      )
    }
  }
export default StepSeven;
