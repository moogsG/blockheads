import React, {Component} from 'react';

class MakeBlock extends Component {
  firstHash() {
    return this.props.prevHash
      ? this.props.prevHash
      : '0000000000000000000000000000000000000000000000000000000000000000'
  }
  render() {
    return (
      <div className={"invalid goodBox box" + this.props.height}>
        <h1>Block</h1>
        <div className="well">
          <form className="form-horizontal">
            <div className="form-group">
              <label className="col-sm-2 control-label">Block:</label>
              <div className="col-sm-10">
                <div className="input-group">
                  <span className="input-group-addon">#</span>
                  <input type="text" disabled="disabled" value={this.props.height} className="form-control"/>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-2 control-label">Nonce:</label>
              <div className="col-sm-10">
                <input type="text" disabled="disabled" value={this.props.Nonce} className="form-control"/>
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-2 control-label">Data:</label>
              <div className="col-sm-10">
                <textarea rows="3" data={this.props.height} className="form-control" onKeyUp={this.props.genHash}>{this.props.data}</textarea>
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-2 control-label">Hash:</label>
              <div className="col-sm-10">
                <input type="text" disabled="disabled" className="form-control" value={this.props.hash}/>
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-2 control-label">PrevHash:</label>
              <div className="col-sm-10">
                <input type="text" disabled="disabled" className="form-control" value={this.firstHash()}/>
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-2">
                <i className="icon-spinner icon-spin icon-large"></i>
              </div>
              <div className="col-sm-10">
                <button
                  onClick={this.props.mine}
                  data-style="expand-right"
                  data={this.props.height}
                  className="btn btn-primary ladda-button">
                  <span className="ladda-label" data={this.props.height}>Mine</span>
                  <div className='loader' data={this.props.height}/>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default MakeBlock;
