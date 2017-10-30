import React, {Component} from 'react';
import MakeBlock from './makeBlock.jsx';
const SHA256 = require('crypto-js/sha256');

class InvalidHash extends Component {

  constructor(props) {
    super(props);

    this.state = {
      hash: [
        SHA256("first").toString(), SHA256("second").toString(), SHA256("third").toString()
      ],
      mined: [
        SHA256("first").toString(), SHA256("second").toString(), SHA256("third").toString()
      ],
      difficulty: 4,
      maximumNonce: 500000,
      pattern: '0000'
    };
    this.genHash = this.genHash.bind(this);
    this.greenChange = this.greenChange.bind(this);
    this.colorChange = this.colorChange.bind(this);
    this.mine = this.mine.bind(this);
  }
  genHash(event) {
    let value = event.target.value;
    let index = event.target.attributes.data.value;
    value = SHA256(value).toString();
    let hash = this.state.hash;
    hash[index - 1] = value;
    this.setState(hash);
    this.colorChange(index, value);
  };

  colorChange(index, value) {
    if (this.state.mined[index - 1] != value) {
      this.redChange(index);
    } else {
      this.greenChange(index);
    }
  }

  redChange(index) {
    index = parseInt(index);
    switch (true) {
      case(index <= 1):
        $('.box1').addClass('badBox').removeClass('goodBox');
      case(index <= 2):
        $('.box2').addClass('badBox').removeClass('goodBox');
      case(index <= 3):
        $('.box3').addClass('badBox').removeClass('goodBox');
      default:
        break;
    }
  }

  greenChange(index) {
    index = parseInt(index);
    let hash = this.state.hash;
    let mined = this.state.mined;
    switch (true) {
      case(index === 1):
        if (hash[0] === mined[0]) {
          $('.box1').removeClass('badBox').addClass('goodBox');
        } else {
          break;
        }
      case(index === 2):
        if (hash[1] === mined[1] && hash[0] === mined[0]) {
          $('.box2').removeClass('badBox').addClass('goodBox');
        } else {
          break;
        }
      case(index === 3):
        if (hash[2] === mined[2] && hash[1] === mined[1]) {
          $('.box3').removeClass('badBox').addClass('goodBox');
        }
      default:
        break;
    }
  }

  mine(event) {
    event.preventDefault();
    let index = event.target.attributes.data.value;
    let has = $(".box" + index).hasClass('badBox')
    if (has) {
      let mined = this.state.mined;
      console.log(mined);
      mined[index - 1] = this.state.hash[index - 1];
      setTimeout(() => {
        $(".box" + index).removeClass('badBox').addClass('goodBox');
        this.setState(mined);
      }, 5000);
    }
  }

  render() {

    let blocks = [
      {
        index: 1,
        Nonce: 325342,
        data: "first"
      }, {
        index: 2,
        Nonce: 1203932,
        data: "second"
      }, {
        index: 3,
        Nonce: 8493232,
        data: "third"
      }
    ];

    const block = blocks.map(blocks => {
      return (<MakeBlock
        key={blocks.index}
        height={blocks.index}
        Nonce={blocks.Nonce}
        data={blocks.data}
        genHash={this.genHash}
        prevHash={this.state.mined[blocks.index - 2]}
        hash={this.state.hash[blocks.index - 1]}
        mine={this.mine}/>)
    });

    return (
      <section id="InvalidHash">
        <div className="container">
          <div className="blocks">{block}</div>
        </div>
      </section>
    );
  }
}
export default InvalidHash;
