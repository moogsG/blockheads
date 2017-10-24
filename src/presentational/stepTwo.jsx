import React, {Component} from 'react';


  class StepTwo extends Component {
    constructor(props) {
      super(props);

            this.state = {
              privKey: '',
              pubKey: '',
              message: ''
            };
      this.change = this.change.bind(this);
    }

    change(event) {
      let newState ={
        privKey: event.target.value
      };
      this.props.onStateChange(newState);
    }

    render() {
      return (
        <div data-aos="fade-up" data-aos-delay="1000" className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="line"></div>
              <h1>Getting Started</h1>
              <div className="line"></div>
            </div>
            <div className="col-md-6">
              <h2>Great!  You created a Secret Key, or password!</h2>
              <h2>Look to the right and you will see that a Public Key, or username was created from your password.</h2>
            </div>
            <div className="col-md-6">
              <div className="box">
                <div className="row">
                  <div className="col-md-12">
                    <div className="input-group">
                      <span className="input-group-addon" id="basic-addon3">Seceret Key</span>
                      <input type="text" className="form-control" id="secretKey" aria-describedby="basic-addon3" onChange={ this.change } value={this.props.privKey}/>
                    </div>
                    <h2>(This is a HASH)</h2>
                    <div className="input-group">
                      <span className="input-group-addon" id="pubKeyLab">Public Key</span>
                      <input type="text" className="form-control" id="pubKey" aria-describedby="pubKeyLab" value={this.props.pubKey}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="text-center">
                <h2>This is an example of what a 'block' looks like.  Take a look and use it as a reference as we continue.</h2>
              </div>
              <div className="block">
                <div className="row">
                  <div className="col-md-12">
                    <div className="block-header text-center">
                      <span className="block-height float-left" data-toggle="tooltip" title="This is the number of the block.">6</span>
                      <h2>Block Hash</h2>
                      <h4 data-toggle="tooltip" title="39034456789534455454534">39034...</h4>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="list-group">
                      <a href="#" className="list-group-item list-group-item-secondary list-group-item-action">From: 39456 Message: Hello!</a>
                      <a href="#" className="list-group-item list-group-item-secondary list-group-item-action">From: 39456 Message: Hello!</a>
                      <a href="#" className="list-group-item list-group-item-secondary list-group-item-action">From: 39456 Message: Hello!</a>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="block-footer">
                      <div className="row">
                        <div className="col-md-6">
                          <h4 data-toggle="tooltip" title="39034456789534455454534">1235...</h4>
                        </div>
                        <div className="col-md-6 ">
                          <h4 className="float-right" data-toggle="tooltip" title="39034456789534455454534">67891...</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
export default StepTwo;
