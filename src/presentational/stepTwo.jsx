import React, {Component} from 'react';
const SHA256 = require('crypto-js/sha256');
import TextScramble from '../scripts/textScram';
class StepTwo extends Component {
  constructor(props) {
    super(props);
    this.change = this.change.bind(this);
  }

  change(event) {
    const el = document.querySelector('.hash')
    const fx = new TextScramble(el)
    let newState = {
      privKey: event.target.value
    };
    this.props.onStateChange(newState);
    fx.setText(this.props.pubKey)
  }

  render() {
    return (
      <section id="StepTwo">
        <div className="container text-center">
          <div data-aos="fade-up">
            <div className="row">
              <div className="col-md-12">
                <div className="line"/>
                <h1 className="text-center">GETTING STARTED</h1>
                <div className="line"/>
              </div>
              <div className="content"/>
              <div className="col-md-6">
                <h2>Great! You created a
                  <b>Secret Key</b>, or password!</h2>
                <h2>
                  Look to the right and you will see that a
                  <b>&nbsp;Public Key</b>, or username was created from your password. This is called a
                  <b>&nbsp;hash</b>.
                </h2>
              </div>
              <div className="col-md-6">
                <div className="box">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="input-group">
                        <span className="input-group-addon" id="basic-addon3">
                          Seceret Key
                        </span>
                        <input type="text" className="form-control" id="secretKey" aria-describedby="basic-addon3" onChange={this.change} value={this.props.privKey}/>
                      </div>
                      <h4>( This is a HASH )</h4>
                      <div className="input-group">
                        <span className="input-group-addon" id="pubKeyLab">
                          Public Key
                        </span>
                        <input type="text" className="form-control" id="pubKey" aria-describedby="pubKeyLab" value={this.props.pubKey}/>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
              <div className="row vert-center">
                <div className="col-md-6">
                  <div className="content"/>
                  <div className="block">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="block-header text-center">
                          <span className="block-height float-left" data-toggle="tooltip" title="This is the number of the block.">Height</span>
                          <h2>Block Hash</h2>
                          <h4>{this.props.hash}</h4>
                        </div>
                      </div>
                      <div className="col-md-12"></div>
                      <div className="col-md-12">
                        <div className="input-group">
                          <span className="input-group-addon" id="pubKeyLab">
                            PubKey
                          </span>
                          <input type="text" className="form-control hash" id="pubKey" aria-describedby="pubKeyLab" value={this.props.pubKey}/>
                        </div>
                        <div className="input-group">
                          <span className="input-group-addon" id="transmissionLab">
                            Transmission
                          </span>
                          <input type="text" className="form-control" id="transmission" aria-describedby="transmissionLab" defaultValue="your message here"/>
                        </div>
                        <div className="input-group">
                          <span className="input-group-addon" id="pubKeyLab">
                            PubKey
                          </span>
                          <input type="text" className="form-control" id="pubKey" aria-describedby="pubKeyLab" value="2413fb3709b05939f04cf2e92f7d0897fc2596f9ad0b8a9ea855c7bfebaae892"/>
                        </div>
                        <div className="input-group">
                          <span className="input-group-addon" id="transmissionLab">
                            Transmission
                          </span>
                          <input type="text" className="form-control" id="transmission" aria-describedby="transmissionLab" defaultValue="I like cake!"/>
                        </div>
                        <div className="block-footer">
                          <div className="row">
                            <div className="col-md-6">
                              <h4 data-toggle="tooltip" title="39034456789534455454534" className="float-left">PREVHASH</h4>
                            </div>
                            <div className="col-md-6 ">
                              <h4 className="float-right" data-toggle="tooltip" title="39034456789534455454534">NEXTHASH</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="">
                    <h2>
                      This is an example of what a 'block' looks like. Take a look and use it as a reference as we continue.
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default StepTwo;
