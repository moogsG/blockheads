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
    let index = $(event.target).closest('button')[0].attributes.data.value;
    console.log(index);
    let has = $(".box" + index).hasClass('badBox')
    let hash = this.state.hash;
    let nonce = this.state.nonce;
    if (has && (this.state.hash[index - 2] === undefined || this.state.hash[index - 2].substring(0, 4) === '0000')) {
      $('.box' + index + ' .loading').removeClass('display-none')
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
        $('.box' + index + ' .loading').addClass('display-none')
        return false;
      }, 2500);
    }
  }

  render() {

    let blocks = [
      {
        index: 1
      }, {
        index: 2
      }, {
        index: 3
      }
    ];

    const block = blocks.map(blocks => {
      return (<MakeBlock key={blocks.index} height={blocks.index} Nonce={this.state.nonce[blocks.index - 1]} data={this.state.data[blocks.index - 1]} genHash={this.genHash} prevHash={this.state.hash[blocks.index - 2]} hash={this.state.hash[blocks.index - 1]} mine={this.mine}/>)
    });

    return (<section id="InvalidHash">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="line"></div>
            <h1>BLOCKCHAIN INTEGRITY</h1>
            <div className="line"></div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h2>
              People say that the blockchain is secure, but how does that work? What makes it secure?</h2>
            <h2>
              Blocks are constantly validating themselves along with the blocks before them. This is done by the
              <b>&nbsp;HASH&nbsp;</b>
              of the block. If one block is tampered with, the entire hash is changed and therefore no longer valid.
            </h2>
            <h2>
              What is more, any blocks following are also made invaild. Once a block is edited, itself along with any following will have to be
              <b>&nbsp;MINED&nbsp;</b>
              to create a siginiture hash.
            </h2>
            <h2>
              Take a look at this example. Here there are three blocks from a chain. Try changing the data in them and then mine them.
            </h2>
            <h2 className="text-center">
              What does
              <b>&nbsp;MINING&nbsp;</b>
              do? How does the
              <b>&nbsp;NONCE&nbsp;</b>
              affect the hash?
            </h2>
          </div>
        </div>
        <div className="content"/>
        <div className="row">{block}</div>
      </div>
      <div className="content"/>
      <div className="content"/>
    </section>);
  }
}
export default InvalidHash;
