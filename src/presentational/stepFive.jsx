import React, {Component} from 'react';
import Dragula from 'react-dragula';
const SHA256 = require('crypto-js/sha256');
import TextScramble from '../scripts/textScram';
class StepFive extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transmissions: [],
      hash: 'f0e4c2f76c58916ec258f246851bea091d14d4247a2fc3e18694461b1816e13b'
    };
    this.change = this.change.bind(this);
  }

  change(event) {
    let newState = {
      transmissions: event.textContent
    };

    const el = document.querySelector('.hash')
    const fx = new TextScramble(el)

    fx.setText(this.state.hash)
    let index = this.state.transmissions.indexOf(newState.transmissions);
    if (index === -1) {
      Promise.resolve(this.state.transmissions.push(newState.transmissions)).then(() => {
        this.setState({
          hash: SHA256(this.state.transmissions.toString()).toString()
        });
      });
    } else {
      Promise.resolve(this.state.transmissions.splice(index)).then(() => {
        this.setState({
          hash: SHA256(this.state.transmissions.toString()).toString()
        });
      });
    }
    console.log(event.textContent);
  }

  dragulaDecorator = componentBackingInstance => {
    if (componentBackingInstance) {
      let options = {
        isContainer: function(el) {
          return el.classList.contains('dragula-container');
        }
      };
      Dragula([componentBackingInstance], options);
    }
  };
  dragulaDropDecorator = componentBackingInstance => {
    if (componentBackingInstance) {
      let options = {
        isContainer: function(el) {
          return el.classList.contains('dragula-container');
        },
        moves: function(el, source, handle, sibling) {
          return true; // elements are always draggable by default
        },
        oveOnSpill: true
      };
      let drake = Dragula([componentBackingInstance], options);
      drake.on('drop', el => {
        this.change(el);
      });
      drake.emit('shadow');
    }
  };
  render() {
    return (
      <section id="StepFive">
        <div className="container">
          <div data-aos="flip-up">
            <div className="row">
              <div className="col-md-12 text-center">
                <div className="line"/>
                <h1>THE NEW BLOCK</h1>
                <div className="line"/>
              </div>
            </div>
            <div className="content"/>
            <div className="row">
              <div className="col-md-12 vert-center">
                <h1>
                  Time to add your transmission to the next block! Looks like there a few transmissions ready to be added. Blocks are able top house many transmissions, so how about we add a few from the MEMPOOL(memory pool).
                </h1>
              </div>
              <div className="col-md-12">
                <div className="content"/>
                <div className="box">
                  <div className="row">
                    <div className="vert-center">
                      <div className="col-md-4">
                        <div className="text-center">
                          <h2>MEMPOOL</h2>
                        </div>
                        <div className="row">
                          <div className="dragula-container" ref={this.dragulaDropDecorator}>
                            <div className="col-md-12">
                              <div className="content"/>
                              <div className="input-group">
                                <span className="input-group-addon" id="pubKeyLab">
                                  PubKey
                                </span>
                                <input draggable="true" type="text" className="form-control" id="pubKey" aria-describedby="pubKeyLab" value="8af1da89d817259b9e4ada608dbb9ce3b9011ccf80626733e752b01b8d13a532"/>
                              </div>
                              <div className="input-group">
                                <span className="input-group-addon" id="transmissionLab">
                                  Transmission
                                </span>
                                <input type="text" className="form-control" id="transmission" aria-describedby="transmissionLab" value="Prairie Oysters"/>
                              </div>
                            </div>

                            <div className="col-md-12">
                              <div className="content"/>
                              <div className="input-group">
                                <span className="input-group-addon" id="pubKeyLab">
                                  PubKey
                                </span>
                                <input type="text" className="form-control" id="pubKey" aria-describedby="pubKeyLab" value="f0e4c2f76c58916ec258f246851bea091d14d4247a2fc3e18694461b1816e13b"/>
                              </div>
                              <div className="input-group">
                                <span className="input-group-addon" id="transmissionLab">
                                  Transmision
                                </span>
                                <input type="text" className="form-control" id="transmission" aria-describedby="transmissionLab" value="Frog Legs"/>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="content"/>
                              <div className="input-group">
                                <span className="input-group-addon" id="pubKeyLab">
                                  PubKey
                                </span>
                                <input type="text" className="form-control" id="pubKey" aria-describedby="pubKeyLab" value="2413fb3709b05939f04cf2e92f7d0897fc2596f9ad0b8a9ea855c7bfebaae892"/>
                              </div>
                              <div className="input-group">
                                <span className="input-group-addon" id="transmissionLab">
                                  Transmision
                                </span>
                                <input type="text" className="form-control" id="transmission" aria-describedby="transmissionLab" value="Century Egg"/>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-8 secondaryFont">
                        <div className="content"/>
                        <div className="block">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="block-header text-center">
                                <span className="block-height float-left" data-toggle="tooltip" title="This is the number of the block.">
                                  6
                                </span>
                                <div className="text-center">
                                  <h2>Block Hash</h2>
                                </div>
                                <h4 className="hash">{this.state.hash}</h4>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="dragula-container" ref={this.dragulaDecorator}>
                                <div className="row"/>
                                <div className="col-md-12">
                                  <div className="content"/>
                                  <div className="input-group">
                                    <span className="input-group-addon" id="pubKeyLab">
                                      PubKey
                                    </span>
                                    <input draggable="true" type="text" className="form-control" id="pubKey" aria-describedby="pubKeyLab" value={this.props.pubKey}/>
                                  </div>
                                  <div className="input-group">
                                    <span className="input-group-addon" id="transmissionLab">
                                      Transmission
                                    </span>
                                    <input type="text" className="form-control" id="transmission" aria-describedby="transmissionLab" value={this.props.favFood}/>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="block-footer">
                                <div className="row">
                                  <div className="col-md-6">
                                    <h4 data-toggle="tooltip" title="39034456789534455454534">
                                      1235...
                                    </h4>
                                  </div>
                                  <div className="col-md-6 ">
                                    <h4 className="float-right" data-toggle="tooltip" title="39034456789534455454534">
                                      67891...
                                    </h4>
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
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default StepFive;
