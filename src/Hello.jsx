import React from 'react';

export default class Hello extends React.Component {
  constructor(props){
    super(props)
    this.state = {counter: 1}
  }
  count(){
    this.setState({counter: this.state.counter + 1});
  }
  render() {
    return (
      <div>
        <h1>I am the counter: {this.state.counter}</h1>
        <button type="button" onClick={() => this.count()}>click</button>
      </div>);
  }
}
