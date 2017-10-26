import React, {Component} from 'react';

class StepThree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pubKey: '',
      isPubKey: ''
    };
    this.sendState = this
      .sendState
      .bind(this);
    this.change = this
      .change
      .bind(this);
  }
  sendState(event) {
    let newState = {
      favFood: event.target.value
    };
    this
      .props
      .onStateChange(newState);
  }

  change(event) {
    let newState = {
      isPubKey: event.target.value
    };
    Promise
      .resolve(this.props.onStateChange(newState))
      .then(() => {
        if (this.props.pubKey == this.props.isPubKey) {
          console.log('Yes!');
        } else {
          console.log('BI+IO');
        }
      });
  }
  render() {
    return (
      <section id="StepThree">
        <div className="container">
          <div data-aos="fade-up">
            <div className="row">
              <div className="col-md-12 text-center">
                <div className="line"/>
                <h1>SEND TRANSACTION</h1>
                <div className="line"/>
              </div>
              <div className="row">
                <div className="col-md-8 secondaryFont">
                  <div className="box">
                    <div className="row">
                      <div className="vert-center">
                        <div className="col-md-2">
                          <span className="giant hvr-backward">{'{'}</span>
                        </div>
                        <div className="col-md-8 text-center ">
                          <form action="#">
                            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                              <label className="mdl-textfield__label" htmlFor="sample1">
                                <span className="red">const</span>
                                pubKey
                                <span className="yellow">=</span>
                              </label>
                              <input
                                className="mdl-textfield__input"
                                type="text"
                                id="sample1"
                                onChange={this.change}
                                value={this.props.isPubKey}/>
                            </div>
                            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                              <label className="mdl-textfield__label " htmlFor="sample2">
                                <span className="red">let</span>
                                favFood
                                <span className="yellow">=</span>
                              </label>
                              <input
                                className="mdl-textfield__input"
                                type="text"
                                id="sample2"
                                onChange={this.sendState}
                                value={this.props.favFood}/>
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
                  <h1>
                    To send your first transaction, enter your
                    <span className="secondaryFont hvr-pulse-grow">pubKey</span>
                    along with your favourite food.
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 secondaryFont">
            <div className="box">
              <div className="row">
                <div className="vert-center">
                  <div className="col-md-2">
                    <span className="giant hvr-backward">{'{'}</span>
                  </div>
                  <div className="col-md-8 text-center ">
                    <form action="#">
                      <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <label className="mdl-textfield__label" htmlFor="sample1">
                          <span className="red">const</span>
                          pubKey
                          <span className="yellow">=</span>
                        </label>
                        <input
                          className="mdl-textfield__input"
                          type="text"
                          id="sample1"
                          onChange={this.change}
                          value={this.props.isPubKey}/>
                      </div>
                      <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <label className="mdl-textfield__label " htmlFor="sample2">
                          <span className="red">let</span>
                          favFood
                          <span className="yellow">=</span>
                        </label>
                        <input
                          className="mdl-textfield__input"
                          type="text"
                          id="sample2"
                          onChange={this.sendState}
                          value={this.props.favFood}/>
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
            <h1>
              To send your first transaction, enter your
              <span className="secondaryFont hvr-pulse-grow">pubKey</span>
              along with your favourite food.
            </h1>
          </div>
        </div>
      </section>
    );
  }
}
export default StepThree;
