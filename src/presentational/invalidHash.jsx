import React, {Component} from 'react';
import MakeBlock from './makeBlock.jsx';
const SHA256 = require('crypto-js/sha256');

class InvalidHash extends Component {

  constructor(props) {
    super(props);

    this.state = {
      hash: [
        '000015783b764259d382017d91a36d206d0600e2cbb3567748f46a33fe9297cf', '000012fa9b916eb9078f8d98a7864e697ae83ed54f5146bd84452cdafd043c19', '0000b9015ce2a08b61216ba5a0778545bf4ddd7ceb7bbd85dd8062b29a9140bf'
      ],
      data: [
        'first', 'second', 'third'
      ],
      nonce: [11316, 35230, 12937]
    };
    this.genHash = this.genHash.bind(this);
    this.mine = this.mine.bind(this);
    this.redChange = this.redChange.bind(this);
  }
  genHash(event) {
    let value = event.target.value;
    let index = event.target.attributes.data.value;
    let message = $(".data" + index).val();
    let data = this.state.data;
    value = SHA256(value).toString();
    let hash = this.state.hash;
    if (message !== data[index - 1]) {
      hash[index - 1] = value;
      this.setState(hash);
      this.redChange(index);
    } else {

      data[index - 1] = message;
      this.setState(data);
    }
  };

  redChange(index) {
    index = parseInt(index);
    let hash = this.state.hash;
    switch (true) {
      case(index === 1):
        $('.box1').addClass('badBox').removeClass('goodBox');
        hash[0] = SHA256(this.state.hash[0]).toString();
      case(index === 2):
        $('.box2').addClass('badBox').removeClass('goodBox');
        hash[1] = SHA256(this.state.hash[1]).toString();
      case(index === 3):
        $('.box3').addClass('badBox').removeClass('goodBox');
        hash[2] = SHA256(this.state.hash[2]).toString();
      default:
        this.setState(hash);
        break;
    }
  }

  mine(event) {
    event.preventDefault();
    let index = event.target.attributes.data.value;
    let has = $(".box" + index).hasClass('badBox')
    let hash = this.state.hash;
    let nonce = this.state.nonce;
    if (has) {
      for (var x = 0; x <= 500000; x++) {
        hash[index - 1] = SHA256(hash[index - 1]).toString();
        if (hash[index - 1].substring(0, 4) === '0000') {
          nonce[index - 1] = x;
          break;
        }
      }
      setTimeout(() => {
        this.setState(hash);
        this.setState(nonce);
        $(".box" + index).removeClass('badBox').addClass('goodBox');
        return false;
      }, 2500);
    }
  }

  render() {

    let blocks = [
      {
        index: 1,
        data: "first"
      }, {
        index: 2,
        data: "second"
      }, {
        index: 3,
        data: "third"
      }
    ];

    const block = blocks.map(blocks => {
      return (
        <MakeBlock
          key={blocks.index}
          height={blocks.index}
          Nonce={this.state.nonce[blocks.index - 1]}
          data={blocks.data}
          genHash={this.genHash}
          prevHash={this.state.hash[blocks.index - 2]}
          hash={this.state.hash[blocks.index - 1]}
          mine={this.mine}/>
      )
    });

    return (
      <section id="InvalidHash">
        <div className="container">
          <div className="row">{block}</div>
        </div>
      </section>
    );
  }
}
export default InvalidHash;
