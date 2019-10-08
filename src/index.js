import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class NamePage extends Component {
  render() {
    return (
      <div className="page">
        <p>
          Greetings, traveler! What is your name?
          <br />
          <input
            type="text"
            value={this.props.data.name}
            onChange={event =>
              this.props.setStateFunction("name", event.target.value)
            }
          />
        </p>
        <button onClick={() => this.props.goFunction(StartPage)}>
          Continue...
        </button>
      </div>
    );
  }
}

class StartPage extends Component {
  render() {
    return (
      <div className="page">
        <p>
          Welcome, {this.props.data.name}! How would you like to get to your
          destination?
        </p>
        <button onClick={() => this.props.goFunction(TrainPage)}>Train</button>
        <button onClick={() => this.props.goFunction(ShipPage)}>Ship</button>
      </div>
    );
  }
}

class TrainPage extends Component {
  render() {
    return (
      <div className="page">
        <p>
          Welcome aboard the choo-choo train! Please make your way to your seat.
          What is the number?
        </p>
        <select>
          <option value="1">Seat 1</option>
          <option value="2">Seat 1</option>
          <option value="3">Seat 1</option>
          <option value="4">Seat 1</option>
          <option value="5">Seat 1</option>
        </select>
      </div>
    );
  }
}

class ShipPage extends Component {
  render() {
    return (
      <div className="page">
        <p>
          Welcome aboard the ship! Please make your way to your seat. What is
          the number?
        </p>
        <select>
          <option value="1">Seat 1</option>
        </select>
      </div>
    );
  }
}

class EPage extends Component {
  render() {
    return (
      <div className="page">
        <p>Womp womp?</p>
        <button onClick={() => this.props.goFunction(TrainPage)}>
          Scuba Dive
        </button>
        <button onClick={() => this.props.goFunction(TrainPage)}>
          Bungee Jump
        </button>
      </div>
    );
  }
}

class JPage extends Component {
  render() {
    return (
      <div className="page">
        <p>Weemp Weemp?</p>
        <button onClick={() => this.props.goFunction(TrainPage)}>
          Pee Pee
        </button>
        <button onClick={() => this.props.goFunction()}>Poo Poo</button>
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageClass: NamePage
    };
  }

  goToPage(pageClass) {
    this.setState({
      pageClass: pageClass
    });
  }

  render() {
    var app = this;

    function setState(key, value) {
      let newState = {};
      newState[key] = value;
      app.setState(newState);
    }

    function goFunction(pageClass) {
      app.goToPage(pageClass);
    }

    return (
      <div className="App">
        <this.state.pageClass
          data={this.state}
          setStateFunction={setState}
          goFunction={goFunction}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
