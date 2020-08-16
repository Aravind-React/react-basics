import React, { PureComponent } from 'react';

class App extends PureComponent {

  state = {
    name: "Aravind"
  }

  componentDidMount() {
    console.log("componentDidMount", this.state.name);
    this.setState({
      name: "Aravind"
    })
  }
  render() {
    console.log("render", this.state.name);
    return (
      <div>
        <p>{this.state.name}</p>
      </div>
    )
  }
}

export default App
