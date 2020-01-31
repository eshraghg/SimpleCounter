import React from "react";

class App extends React.Component {
  state = { num: 0 };

  onButtonClick = () => {
    const newNum = this.state.num + 1;
    this.setState({ num: newNum });
  };

  render() {
    return (
      <div>
        <div>The currnet number is: {this.state.num} </div>
        <div>
          <button onClick={this.onButtonClick}>Add one</button>
        </div>
      </div>
    );
  }
}

export default App;
