import React, {Component} from 'react';

class MakeBlock extends Component {
  render() {
    return (
      <div className="col-md-4">
      <div className={"invalid goodBox box " + this.props.height}>
        <div className="row">
          <div className="col-md-12">
        <h1>Block</h1>
        <div className="well">
          <form className="form-horizontal">
            <div className="form-group">
              <label className="col-sm-2 control-label">Block:</label>
                <div className="input-group">
                  <span className="input-group-addon">#</span>
                  <input type="text" disabled="disabled" value={this.props.height} className="form-control"/>
                </div>
              </div>
            <div className="form-group">
              <label className="col-sm-2 control-label">Nonce:</label>

                <input type="text" disabled="disabled" value={this.props.Nonce} className="form-control"/>

            </div>
            <div className="form-group">
              <label className="col-sm-2 control-label">Data:</label>

                <textarea rows="3" data={this.props.height} className="form-control" onKeyUp={this.props.genHash}>{this.props.data}</textarea>

            </div>
            <div className="form-group">
              <label className="col-sm-2 control-label">Hash:</label>

                <input type="text" disabled="disabled" className="form-control" value={this.props.hash}/>

            </div>
            <div className="form-group">
              <label className="col-sm-2 control-label">PrevHash:</label>

                <input type="text" disabled="disabled" className="form-control" value={this.props.prevHash}/>

            </div>
            <div className="form-group">
              <div className="col-sm-2">
                <i className="icon-spinner icon-spin icon-large"></i>
              </div>
      
                <button
                  onClick={this.props.mine}
                  data-style="expand-right"
                  data={this.props.height}
                  className="btn btn-primary ladda-button">
                  <span className="ladda-label" data={this.props.height}>Mine</span>
                  <div className='loader' data={this.props.height}/>
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
