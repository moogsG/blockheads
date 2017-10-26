import React, {Component} from 'react';

class Chain extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.send = this.send.bind(this);
  }
  componentDidMount() {
    this.connection = new WebSocket('ws:localhost:3001');
    console.log("Connected!")
  }
send(even){
  this.connection.send(JSON.stringify({
    data: "client1"
  }));
}
  render() {
    return (
      <div>

            <button value="button" onClick={this.send}>VLICK</button>
      </div>
    )
  }
}
export default Chain;
