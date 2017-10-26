import React, {Component} from 'react';

class Chain extends Component {
  constructor(props) {
    super(props);

    this.sendWS = this.sendWS.bind(this);
  }
  componentDidMount() {
    this.recive = new WebSocket('ws:localhost:6001');
    console.log("Connected!")
    this.recive.onmessage = event => {
      console.log(JSON.parse(JSON.parse(event.data).data))
    }
  }
  sendWS(event) {
    var json_upload = "data=" + JSON.stringify({data:"John Rambo", "from":"3247987328947"});
    let connection = new XMLHttpRequest();
    connection.open('POST', "http://localhost:3001/mine", true);
    connection.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    connection.onreadystatechange = function () {
      if (connection.readyState != 4 || connection.status != 200) return;
      /* log server response to console */
      //console.log(JSON.parse(connection.responseText));
    };

connection.send(json_upload);


  }
  render() {
    return (
      <div className="container">
        <div onClick={this.sendWS}>
          <span>VLICK</span>
        </div>
      </div>
    )
  }
}
export default Chain;
