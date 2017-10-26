import React, { Component } from 'react';

class Chain extends Component {
  constructor(props) {
    super(props);

    this.state = {
      connect: {
        server: new WebSocket('ws:localhost:3001')
      }
    };
  }
  componentDidMount() {
    this.state.connect.server.addEventListener('message', event => {
      let newMessage = JSON.parse(event.data);
      console.log(newMessage);
    });
  }

  send() {
    this.state.connect.server.send(JSON.stringify({ data: 'message' }));
  }
  render() {
    return (
      <div>
        <button value="button" onClick={this.send}>
          VLICK
        </button>
      </div>
    );
  }
}
export default Chain;
