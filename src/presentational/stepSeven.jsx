
import React, {Component} from 'react';

  class StepSeven extends Component {
    constructor(props) {
      super(props);

      this.change = this.change.bind(this);
    }

    change(event) {
      this.props.sendWS();
    }

    render() {

      return (
        <div className="block">
          <div className="row">
            <div className="col-md-12">
              <div className="block-header text-center">
                <span className="block-height float-left" data-toggle="tooltip" title="This is the number of the block.">6</span>
                <h2>Block Hash</h2>
                <h4></h4>
              </div>
            </div>
            <div className="col-md-12">
                <div className="dragula-container">
                  <div className="row">
                </div>
            </div>
            </div>
            <div className="col-md-12">
              <h2 onClick={ this.change }>SEND BUTCH</h2>
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

      )
    }
  }
export default StepSeven;
