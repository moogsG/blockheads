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
        <div className="container text-center stepTwo">
          <div data-aos="fade-up">
            <div className="row">
              <div className="col-md-12">
                <div className="line"/>
                <h1 className="text-center">GETTING STARTED</h1>
                <div className="line"/>
              </div>
              <div className="content"/>
              <div className="col-md-6 text-left">
                <h2>Great! You created a
                  <b>&nbsp;secret key!&nbsp;</b>
                  This is a
                  <b>&nbsp;private&nbsp;</b>
                  username that you
                  <b>&nbsp;do not&nbsp;</b>
                  share.</h2>
                <h2>
                  Look to the right and you will see that a
                  <b>&nbsp;public key,&nbsp;</b>
                  or a
                  <b>&nbsp;public&nbsp;</b>
                  username was created from your secret key. This unique ID is called a
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
            </div>
            <div className="row vert-center">
              <div className="col-md-6">
                <div className="content"/>
                <div className="block">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="block-header text-center">
                        <a href="javascript: void(0)" className="tooltip2 biggerBIGGER height float-left block-height">
                          HEIGHT
                          <span>
                            <div className="arrow-up"></div>
                            <strong>Block Height</strong><br/>
                            The position of the block in the chain.
                          </span>
                        </a>
                        <a href="javascript: void(0)" className="tooltip2 tooltipBlock biggerBIGGER">
                          <h2>BLOCK HASH</h2>
                          <span>
                            <div className="arrow-up"></div>
                            <strong>Curret Block Hash</strong><br/>
                            A unique string belonging only to the attached block. It is created from the contents of the block.
                          </span>
                        </a>
                        <a href="javascript: void(0)" className="tooltip2 biggerBIGGER height float-right block-height noonce">
                          NONCE
                          <span>
                            <div className="arrow-up"></div>
                            <strong>Nonce</strong><br/>
                            Nonce is the product of mining, and creates the siginiture of the hash.
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <h3 className="text-center">TRANSMISSIONS</h3>
                    </div>
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
                        <span className="biggerBIGGER">
                          <div className="arrow-up"></div>
                          <strong>Public Key of Transmission</strong><br/>
                          Represents the sender of transmission.
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
                        <span className="biggerBIGGER">
                          <div className="arrow-up"></div>
                          <strong>Data of Transmission</strong><br/>
                          The data contents of the transmission.
                        </span>
                      </div>
                      <div className="block-footer">
                        <div className="row">
                          <div className="col-md-6">
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
                <div className="text-left">
                  <h2>
                    This is an example of what a
                    <b>&nbsp;block&nbsp;</b>
                    looks like.
                    <b>&nbsp;Hover&nbsp;</b>
                    over the different parts to get more understanding.
                  </h2>
                  <h2>
                    Take a special note of the
                    <b>&nbsp;block hash&nbsp;</b>
                    as that is discussed in the next step.
                  </h2>
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
