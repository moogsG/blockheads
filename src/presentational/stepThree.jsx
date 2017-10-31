import React, {Component} from 'react';

class StepThree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pubKey: '',
      isPubKey: ''
    };
    this.sendState = this.sendState.bind(this);
    this.change = this.change.bind(this);
    this.scrollEnter = this.scrollEnter.bind(this);
  }
  sendState(event) {
    let newState = {
      favFood: event.target.value
    };
    this.props.onStateChange(newState);

  }

  change(event) {
    let newState = {
      isPubKey: event.target.value
    };
    this.props.onStateChange(newState)

  }
  scrollEnter(event) {
    event.preventDefault();

    if (this.props.pubKey == this.props.isPubKey) {
      $('html, body').animate({
        scrollTop: $("#StepFour").offset().top - 90
      }, 2000);
    } else {
      $('.box').addClass('hvr-buzz-out')
      $('.alert-danger').removeClass('display-none')
    }

    console.log("asdf")
  }

  render() {
    return (
      <section id="StepThree">
        <div className="container">
          <div data-aos="fade-up">
            <div className="row">
              <div className="col-md-12">
                <div className="line"/>
                <h1 className="text-center">SEND TRANSACTION</h1>
                <div className="line"/>
              </div>
              <div className="content"/>
              <div className="col-md-8 secondaryFont">
                <div className="box">
                  <div className="row">
                    <div className="vert-center">
                      <div className="col-md-2">
                        <span className="giant hvr-backward">{'\{'}</span>
                      </div>
                      <div className="col-md-8 text-center ">
                        <form onSubmit={this.scrollEnter}>
                          <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                            <label className="mdl-textfield__label" htmlFor="sample1">
                              <span className="red">const&nbsp;</span>
                              pubKey
                              <span className="yellow">=</span>
                            </label>
                            <input className="mdl-textfield__input" type="text" id="sample1" onChange={this.change} value={this.props.isPubKey}/>
                          </div>
                        </form>
                        <form onSubmit={this.scrollEnter}>
                          <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                            <label className="mdl-textfield__label " htmlFor="sample2">
                              <span className="red">let&nbsp;</span>
                              favFood
                              <span className="yellow">=</span>
                            </label>
                            <input className="mdl-textfield__input" type="text" id="sample2" onChange={this.sendState} value={this.props.favFood}/>
                          </div>
                        </form>
                      </div>
                      <div className="col-md-2">
                        <span className="giant hvr-forward">}</span>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="alert alert-danger display-none text-center" role="alert">
                        You Typed in the wrong
                        <b>&nbsp;PUBKEY!&nbsp;</b>
                        It is in
                        <b>&nbsp;STEPTWO&nbsp;</b>.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 vert-center">
                <h1>
                  To send your first transaction, enter your
                  <span className="secondaryFontInLine hvr-pulse-grow">&nbsp;pubKey&nbsp;</span>
                  along with your favourite food.
                </h1>
              </div>
            </div>
          </div>

        </div>
      </section>
    );
  }
}
export default StepThree;
