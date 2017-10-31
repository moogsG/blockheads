import React, {Component} from 'react';

class MakeBlock extends Component {
  firstHash() {
    return this.props.prevHash
      ? this.props.prevHash
      : '0000000000000000000000000000000000000000000000000000000000000000'
  }
  render() {
    return (
      <div className="col-md-4">
        <div className={"invalid goodBox box box" + this.props.height}>
          <div className="row">
            <div className="col-md-12">
              <p>Block</p>
              <div className="well">
                <form className="form-horizontal">
                  <div className="form-group block-height">
                    <label className="col-sm-2 control-label">Block:</label>
                    <div className="input-group">
                      <span className="input-group-addon">#</span>
                      <input type="text" disabled="disabled" value={this.props.height} className="form-control"/>
                    </div>
                  </div>
                  <div className="form-group block-nonce">
                    <label className="col-sm-2 control-label">Nonce:</label>

                    <input type="text" disabled="disabled" value={this.props.Nonce} className="form-control"/>

                  </div>
                  <div className="form-group block-data">
                    <label className="col-sm-2 control-label">Data:</label>

                    <textarea
                      rows="2"
                      data={this.props.height}
                      className={"form-control data" + this.props.height}
                      onKeyUp={this.props.genHash}>{this.props.data}</textarea>

                  </div>
                  <div className="form-group">
                    <label className="col-sm-2 control-label">Hash:</label>
                    <input type="text" disabled="disabled" className="form-control" value={this.props.hash}/>
                  </div>
                  <div className="form-group">
                    <label className="col-sm-2 control-label">PrevHash:</label>
                    <input type="text" disabled="disabled" className="form-control" value={this.firstHash()}/>
                  </div>
                  <div className="form-group">
                    <div className="col-sm-2">
                      <i className="icon-spinner icon-spin icon-large"></i>
                    </div>

                    <button onClick={this.props.mine} // data-style="expand-left"

                      data={this.props.height} className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent float-right">
                      Mine<div
                        className="mdl-spinner mdl-js-spinner mdl-spinner--single-color is-active display-none loading"
                        data={this.props.height}></div>
                    </button>
                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default MakeBlock;
