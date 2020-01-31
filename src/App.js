import React from "react";
import { connect } from "react-redux";
import addOne from "./actions";

class App extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <div>The currnet number is: {this.props.state.num} </div>
        <div>
          <button onClick={this.props.addOne}>Add one</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { state: state };
};

export default connect(mapStateToProps, { addOne })(App);
