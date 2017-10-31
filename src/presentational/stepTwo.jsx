import React, {Component} from 'react';
const SHA256 = require('crypto-js/sha256');
class StepTwo extends Component {
  constructor(props) {
    super(props);
    this.change = this.change.bind(this);
  }

  change(event) {

    let newState = {
      privKey: event.target.value
    };
    this.props.onStateChange(newState);

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
                  <b>&nbsp;Secret Key</b>, or password!</h2>
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
                        <input
                          type="text"
                          className="form-control"
                          id="secretKey"
                          aria-describedby="basic-addon3"
                          onChange={this.change}
                          value={this.props.privKey}/>
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
                          {/* <span className="block-height float-left" data-toggle="tooltip" title="This is the number of the block.">Height</span> */}
                          <a href="javascript: void(0)" className="tooltip2 biggerBIGGER height float-left block-height">
                            HEIGHT
                            <span>
                              <div className="arrow-up"></div>
                              <strong>Block Height</strong><br/>
                              This indicates the block height of the block in the chain, this indicates how many blocks are in the chain.
                            </span>
                          </a>
                          {/* <h2>Block Hash</h2>
                          <h4>{this.props.hash}</h4> */
                          }
                          <a href="javascript: void(0)" className="tooltip2 tooltipBlock biggerBIGGER">
                            <h2>BLOCK HASH</h2>
                            <span>
                              <div className="arrow-up"></div>
                              <strong>Curret Block Hash</strong><br/>
                              This is the current blocks hash, a unique string beloning only to this hash based off of its contents.
                            </span>
                          </a>
                        </div>
                      </div>
                      <div className="col-md-12"></div>
                      <div className="col-md-12">
                        <div className="input-group tooltip2 tooltipRight">
                          <div className="input-group-addon" id="pubKeyLab">
                            PubKey
                          </div>
                          <input
                            type="text"
                            className="form-control form-hash"
                            id="pubKey"
                            aria-describedby="pubKeyLab"
                            value={this.props.pubKey}/>
                          <span>
                            <div className="arrow-up"></div>
                            <strong>Public Key of Transmission One</strong><br/>
                            This is the public key in hash form, representing the sender of transmission one of this block.
                          </span>
                        </div>
                        <div className="input-group tooltip2 tooltipRight">
                          <div className="input-group-addon" id="transmissionLab">
                            Transmission
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            id="transmission"
                            aria-describedby="transmissionLab"
                            defaultValue="your message here"/>
                          <span>
                            <div className="arrow-up"></div>
                            <strong>Data of Transmission One</strong><br/>
                            This is data contents of the first transmission of this block.
                          </span>
                        </div>
                        <div className="input-group tooltip2 tooltipRight">
                          <div className="input-group-addon" id="pubKeyLab">
                            PubKey
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            id="pubKey"
                            aria-describedby="pubKeyLab"
                            value="2413fb3709b05939f04cf2e92f7d0897fc2596f9ad0b8a9ea855c7bfebaae892"/>
                          <span>
                            <div className="arrow-up"></div>
                            <strong>Curret Block Hash</strong><br/>
                            This is the public key in hash form, representing the sender of transmission two of this block.
                          </span>
                        </div>
                        <div className="input-group tooltip2 tooltipRight">
                          <div className="input-group-addon" id="transmissionLab">
                            Transmission
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            id="transmission"
                            aria-describedby="transmissionLab"
                            defaultValue="I like cake!"/>
                          <span>
                            <div className="arrow-up"></div>
                            <strong>Data of Transmission Two</strong><br/>
                            This is data contents of the first transmission of this block.
                          </span>
                        </div>
                        <div className="block-footer">
                          <div className="row">
                            <div className="col-md-6">
                              {/* <h4 data-toggle="tooltip" title="39034456789534455454534" className="float-left">PREVHASH</h4> */}
                              <a href="javascript: void(0)" className="tooltip2 biggerBIGGER float-left">
                                PREVHASH
                                <span>
                                  <div className="arrow-up"></div>
                                  <strong>Previouse Hash</strong><br/>
                                  This indicates the hash number of the block that came one before in the chain.
                                </span>
                              </a>
                            </div>
                            <div className="col-md-6 ">
                              {/* <h4 className="float-right" data-toggle="tooltip" title="39034456789534455454534">NEXTHASH
                              </h4> */
                              }
                              <a href="javascript: void(0)" className="tooltip2 biggerBIGGER float-right">
                                NEXTHASH
                                <span>
                                  <div className="arrow-up"></div>
                                  <strong>Next Hash</strong><br/>
                                  This indicates the hash number of the next block in the chain.
                                </span>
                              </a>
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
