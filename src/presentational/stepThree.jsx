import React, {Component} from 'react';


  class StepThree extends Component {
    render() {
      return (
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="line"></div>
              <h1>SEND TRANSACTION</h1>
              <div className="line"></div>
            </div>
            <div className="row">
              <div className="col-md-8 secondaryFont">
                <div className="box">
                  <div className="row">
                    <div className="vert-center">
                    <div className="col-md-2">
                      <span className="giant hvr-backward">{'\{'}</span>
                    </div>
                    <div className="col-md-8 text-center ">
                      <form action="#">
                       <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                         <label className="mdl-textfield__label"    htmlFor="sample1">
                          <span className="red">const</span> pubKey <span className="yellow"> =   </span>
                        </label>
                        <input className="mdl-textfield__input" type="text" id="sample1" />
                      </div>
                      <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <label className="mdl-textfield__label " htmlFor="sample2">
                          <span className="red">let</span> favFood
                          <span className="yellow"> =   </span>
                        </label>
                        <input className="mdl-textfield__input" type="text" id="sample2"/>
                      </div>
                    </form>
                  </div>
                    <div className="col-md-2">
                      <span className="giant hvr-forward">}</span>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 vert-center">
                <h1>To send your first transaction, enter your <span className="secondaryFont hvr-pulse-grow">pubKey</span> along with your favourite food.</h1>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
export default StepThree;
