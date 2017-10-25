add(event){
  event.preventDefault();
  let pick = event.currentTarget.getAttribute('href');
  let index = this.props.picks.indexOf(pick);
  if(index === -1){
    let picks = this.props.picks;
    let newState = {
      picks: this.props.picks.push(pick)
    }
    console.log(newState.picks);
    this.props.onStateChange(newState);
  }else{
    let newState ={
      picks: this.props.picks.splice(index, 1),
      hash: SHA256(this.props.picks.splice(index, 1).toString()).toString()
    }
    this.props.onStateChange(newState);
  }
}