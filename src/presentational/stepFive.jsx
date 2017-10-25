import React, {Component} from 'react';
import * as ReactDOM from 'react-dom';
import Dragula from 'react-dragula';

class StepFour extends Component {
  dragulaDecorator = (componentBackingInstance) => {
    if (componentBackingInstance) {
      let options = {
        isContainer: function (el) {
          if (el.classList.contains('dragula-container2')) {
            return el
              .classList
              .contains('dragula-container2');
          } else {
            return el
              .classList
              .contains('dragula-container');
          }
        }
      };
      var drake = Dragula([componentBackingInstance], options);
      drake.on('drop', function (el, target, sor, sib) {
        if (target.classList.contains('dragula-container2')) {
          console.log("Worked?");
        }
      });
    }
  };

  render() {
    return (
      <section id="StepFive">
        <div data-aos="flip-up" data-aos-delay="1000" className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="line"></div>
              <h1>The new BLOCK</h1>
              <div className="line"></div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 vert-center">
              <h1>Time to add your transmission to the next block! Looks like there a few
                transmissions ready to be added. Blocks are able top house many transmissions,
                so how about we add a few!</h1>
            </div>
            <div className="col-md-12">
              <div className="box">
                <div className="row">
                  <div className="vert-center">
                    <div className="col-md-4">
                      <div className="row">
                        <div className="col-md-12">
                          <div className='dragula-container' ref={this.dragulaDecorator}>
                            <div>Swap me around!!!!!!!!!!!!!!1</div>
                            <div>Swap her around??????????</div>
                            <div>Swap him around.........</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-8 secondaryFont">
                      <div className="block">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="block-header text-center">
                              <span
                                className="block-height float-left"
                                data-toggle="tooltip"
                                title="This is the number of the block.">6</span>
                              <h2>Block Hash</h2>
                              <h4 data-toggle="tooltip" title="39034456789534455454534">39034...</h4>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div
                              className='dragula-container2'
                              ref={this.dragulaDecorator2}
                              style={{
                              height: 20 + 'px'
                            }}></div>
                          </div>
                          <div className="col-md-12">
                            <div className="block-footer">
                              <div className="row">
                                <div className="col-md-6">
                                  <h4 data-toggle="tooltip" title="39034456789534455454534">1235...</h4>
                                </div>
                                <div className="col-md-6 ">
                                  <h4
                                    className="float-right"
                                    data-toggle="tooltip"
                                    title="39034456789534455454534">67891...</h4>
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
    )
  }
}
export default StepFour;
