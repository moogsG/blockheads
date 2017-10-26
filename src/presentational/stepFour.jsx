import React, {Component} from 'react';


  class StepFour extends Component {
    render() {
      return (
        <div className="container">
        <div data-aos="fade-up" data-aos-delay="4000">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="line"></div>
              <h1>CHECK TX</h1>
              <div className="line"> </div>
            </div>
          </div>
            <div className="row">
              <div className="col-md-6 vert-center">
                <h1>Now that your transition is sent, it first has to be verified to be a valid transaction. So in this case, is  {this.props.favFood} REALLY your favourite food?  Is there proof that it is your favourite food? Is it spelled correctly?</h1>
              </div>
            <div className="col-md-6">
              <div className="box secondaryFont">
                <div className="row">
                  <div className="vert-center">
                    <div className="col-md-12 ">
                      <h2 className="secondaryFont"><span className="blue-dark">IF</span> (<span className=" purple">transmission</span><span className="blue-dark">.fav_food</span> is <span className="yellow">true</span>) <span className="purple">then</span></h2>
                      <h2 className="secondaryFont"> &nbsp; add transmission to <span data-toggle="tooltip"title="The mempool is where the transmissions meet up before being adding to a block, but more of that in the next step.">mempool</span></h2>
                      <h2 className="blue-dark secondaryFont">ELSE</h2>
                      <h2 className="secondaryFont">&nbsp; return <span className="yellow">New</span><span className="red">.error</span> = <br/>&nbsp; &nbsp; "Not users favourite food"</h2>
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
export default StepFour;
