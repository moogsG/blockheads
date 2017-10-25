import React, {Component} from 'react';
import Dragula from 'react-dragula';
const SHA256 = require("crypto-js/sha256");
  class StepFive extends Component {
    constructor(props) {
      super(props);
      this.state = {
        transmissions: [],
        hash: '',
      };
      this.change = this.change.bind(this);

    }
    change(event) {
      let newState ={
          transmissions: event.textContent
      };
      let index = this.state.transmissions.indexOf(newState.transmissions)
        if (index === -1) {
        Promise.resolve(this.state.transmissions.push(newState.transmissions))
        .then(()=>{
          this.setState({
            hash: SHA256(this.state.transmissions.toString()).toString()
          })
        })
      }else{
        Promise.resolve(this.state.transmissions.splice(index))
        .then(()=>{
          this.setState({
            hash: SHA256(this.state.transmissions.toString()).toString()
          })
        })
      }
        console.log(event.textContent)
    }

    dragulaDecorator = (componentBackingInstance) => {
        if (componentBackingInstance) {
          let options = ({
            isContainer: function (el) {
              return el.classList.contains('dragula-container');
          }
        });
          Dragula([componentBackingInstance], options)
        }

      };
      dragulaDropDecorator = (componentBackingInstance) => {
          if (componentBackingInstance) {
            let options = ({
              isContainer: function (el) {
                return el.classList.contains('dragula-container');
            },
            moves: function (el, source, handle, sibling) {
              return true; // elements are always draggable by default
            },
            oveOnSpill: true,
          });
            let drake = Dragula([componentBackingInstance], options)
            drake.on('drop', (el) => {
              this.change(el)
            })
            drake.emit('shadow', item, dropTarget);

          }

        };
        componentDidMount(){


        }
    render() {
      return (
        <div className="container">
        <div data-aos="flip-up" data-aos-delay="1000">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="line"> </div>
              <h1>The new BLOCK</h1>
            <div className="line"> </div>
          </div>
        </div>
          <div className="row">
            <div className="col-md-12 vert-center">
              <h1>Time to add your transmission to the next block!  Looks like there a few transmissions ready to be added.  Blocks are able top house many transmissions, so how about we add a few!</h1>
            </div>
            <div className="col-md-12">
              <div className="box">
                <div className="row">
                  <div className="vert-center">
                    <div className="col-md-4">
                      <div className="row">
                        <div className="dragula-container" ref={this.dragulaDropDecorator}>
                          <div className="col-md-12">
                            <div className="input-group">
                              <span className="input-group-addon" id="pubKeyLab">PubKey</span>
                              <input draggable="true" type="text" className="form-control" id="pubKey" aria-describedby="pubKeyLab" value="3993480993..."/>
                              </div>
                              <div className="input-group">
                                <span className="input-group-addon" id="transmissionLab">Transmission</span>
                                <input type="text" className="form-control" id="transmission" aria-describedby="transmissionLab" value="asdf"/>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="input-group">
                              <span className="input-group-addon" id="pubKeyLab">PubKey</span>
                              <input type="text" className="form-control" id="pubKey" aria-describedby="pubKeyLab" value="3993480993..."/>
                              </div>
                              <div className="input-group">
                                <span className="input-group-addon" id="transmissionLab">Transmision</span>
                                <input type="text" className="form-control" id="transmission" aria-describedby="transmissionLab" value="asdf"/>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="input-group">
                              <span className="input-group-addon" id="pubKeyLab">PubKey</span>
                              <input type="text" className="form-control" id="pubKey" aria-describedby="pubKeyLab" value="3993480993..."/>
                              </div>
                              <div className="input-group">
                                <span className="input-group-addon" id="transmissionLab">Transmision</span>
                                <input type="text" className="form-control" id="transmission" aria-describedby="transmissionLab" value="asdf"/>
                            </div>
                          </div>
                    </div>
                  </div>
                </div>
                    <div className="col-md-8 secondaryFont">
                      <div className="block">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="block-header text-center">
                              <span className="block-height float-left" data-toggle="tooltip" title="This is the number of the block.">6</span>
                              <h2>Block Hash</h2>
                              <h4>{ this.state.hash }</h4>
                            </div>
                          </div>
                          <div className="col-md-12">
                              <div className="dragula-container" ref={this.dragulaDecorator}>
                                <div className="row">
                              </div>
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
              </div>
            </div>
          </div>
          </div>
        </div>
      )

    }
  }
export default StepFive;
