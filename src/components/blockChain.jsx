import React, {Component} from 'react';
import Chain from '../presentational/chain.jsx';

class BlockChain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chain: []
    }
    this.sendWS = this.sendWS.bind(this);
  }

  componentDidMount(){

    this.recive = new WebSocket('ws:localhost:6001')
    console.log("Connected!")
    this.recive.onmessage = event => {
      let parseBlock = JSON.parse(JSON.parse(event.data).data)
      let chain = this.state.chain.concat(parseBlock)
      this.setState({
        chain: chain
      })
    }
    this.recive.onopen = event => {
      console.log("opened")
      let type = {
        type: 1
      }
      this.recive.send(JSON.stringify(type))
    }
  }

  sendWS(event) {
    var json_upload = "data=" + JSON.stringify({data: 'John Rambo', from: '3489032840985'});
    let connection = new XMLHttpRequest();
    connection.open('POST', "http://localhost:3001/mine", true);
    connection.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    connection.onreadystatechange = function () {
      if (connection.readyState != 4 || connection.status != 200) return;
    };
    connection.send(json_upload);
  }

  render() {
    let blocks = this.state.chain.map(blocks => {
      console.log(blocks.hash)
      typeof blocks.data === 'object' ? null  : blocks.data = JSON.parse(blocks.data)

      return <Chain
        key={ blocks.hash }
        hash={ blocks.hash }
        timestamp={ blocks.timestamp }
        data={ blocks.data.data }
        prevHash={ blocks.prevHash }/>
      });

    return (
      <div onClick={this.sendWS}>
        { blocks }
      </div>
    )
  }
}
export default BlockChain;
