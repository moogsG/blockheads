import React, {Component} from 'react';

class Chain extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <form method="POST" href="http://localhost:3001/mine">
            <input type="text"/>
            <button value="button"></button>
        </form>
      </div>
    )
  }
}
export default Chain;
