import React, {Component} from 'react';


  class StepSix extends Component {
    constructor(props) {
      super(props);

    }
    render() {
      return (
        <div className="container">
        <div data-aos="fade-up" data-aos-delay="1000">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="line"> </div>
              <h1>SEND BLOCK</h1>
                <div className="line"> </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <div className="box stepSix">
                <div className="row">
                  <div className="vert-center">
                    <div className="col-md-8 text-center secondaryFont">
                      <i className="material-icons server1">storage</i>
                      <div className="circle circle1"></div>
                      <i className="material-icons server2">storage</i>
                      <div className="circle circle2"></div>
                      <i className="material-icons server3">storage</i>
                      <div className="circle circle3"></div>
                      <i className="material-icons server4">storage</i>
                      <div className="circle circle4"></div>
                      <i className="material-icons server5">storage</i>
                      <i className="material-icons server6">storage</i>
                      <div className="circle circle6"></div>
                      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <path d="M325,80 L70,173 M325,80 L413,173 M323,80 L323,303" />
                        <path d="M325,80 L163,303 M300,61 L190,61" />
                        <path d="M165,80 L165,305 M75,170 L165,80 M323,303 L165,80" />
                        <path d="M420,175 L165,83 M319,305 L415,209 M423,209 L165,300" />
                        <path d="M165,300 L70,205 M328,303 L55,205" />
                        <path d="M185,321 L300,321 M99,192.5 L390,192.5" />
                      </svg>
                      <div className="moving shotting1"></div>
                      <div className="moving shotting2"></div>
                      <div className="moving shotting3"></div>
                      <div className="moving shotting4"></div>
                      <div className="moving shotting5"></div>
                      <i className="material-icons greenServer visable">storage</i>
                      <span className="majority">Majority</span>
                      <span className="score2 visable">:4</span>
                      <i className="material-icons redServer visable">storage</i>
                      <span className="score1 visable">:2</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 vert-center">
              <h1>The server which creates the block, then sends it out to all others on the network. So long as the majority recives
                and validate the block, it is then successfully added to the chain.</h1>
            </div>
          </div>
        </div>
        </div>
      )
    }
  }
export default StepSix;
