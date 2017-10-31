import React, {Component} from 'react';

class StepFour extends Component {
  render() {
    return (
      <section id="StepFour">
        <div className="container">
          <div data-aos="fade-up">
            <div className="content">
              <div className="row">
                <div className="col-md-12 text-center">
                  <div className="line"/>
                  <h1>CHECK TX</h1>
                  <div className="line"/>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 vert-center">
                  <h1>
                    Now that your transition is sent, it first has to be verified to be a valid transaction. So in this case, is
                    <b className="secondaryFontInLine">&nbsp;{this.props.favFood}&nbsp;</b>
                    REALLY your favourite food? Is there
                    <b>&nbsp;proof&nbsp;</b>
                    that it is your favourite food?
                  </h1>
                </div>
                <div className="col-md-6">
                  <div className="box secondaryFont">
                    <div className="row">
                      <div className="vert-center">
                        <div className="col-md-12 ">
                          <h3 className="secondaryFont">
                            <span className="blue-dark">IF</span>&nbsp; (&nbsp;<span className=" purple">transmission</span>
                            <span className="blue-dark">.fav_food</span>
                            &nbsp;is&nbsp;
                            <span className="yellow">true</span>&nbsp;)&nbsp;
                            <span className="purple">then</span>
                          </h3>
                          <h3 className="secondaryFont">
                            &nbsp; add transmission to&nbsp;
                            <span data-toggle="tooltip" title="The mempool is where the transmissions meet up before being adding to a block, but more of that in the next step.">
                              mempool
                            </span>
                          </h3>
                          <h3 className="blue-dark secondaryFont">ELSE</h3>
                          <h3 className="secondaryFont">
                            &nbsp; return&nbsp;
                            <span className="yellow">New</span>
                            <span className="red">.error</span>
                            =
                            <br/>&nbsp; &nbsp; "Not users favourite food"
                          </h3>
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
export default StepFour;
