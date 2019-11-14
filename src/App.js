import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
  mulipleBy2 = () => {
    this.setState({ count: this.state.count * 2 });
  };
  dividedBy2 = () => {
    this.setState({ count: this.state.count / 2 });
  };
  squre = () => {
    this.setState({ count: this.state.count * this.state.count });
  };

  render() {
    let { count } = this.state;
    return (
      <div>
        <h3>count:{count}</h3>
        <button onClick={this.increment}>+1</button>
        <button onClick={this.decrement}>-1</button>
        <button onClick={this.mulipleBy2}>*2</button>
        <button onClick={this.dividedBy2}>/2</button>
        <button onClick={this.squre}>^2</button>
      </div>
    );
  }
}
export default App;
